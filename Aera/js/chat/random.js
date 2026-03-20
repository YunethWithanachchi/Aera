import { realTimeDatabase } from "../common/firebase.js";
import { ref, set, onDisconnect, get, remove } from "../common/firebase.js";

export async function initRandom() {
    const userId = sessionStorage.getItem("userId");
    const userName = sessionStorage.getItem("userName");

    if (!userId) {
        window.location.href = "/";
        return;
    }

    await tryMatch(userId, userName);
}
async function tryMatch(userId, userName) {
    const queueRef = ref(realTimeDatabase, "waitingQueue");
    const snapshot = await get(queueRef);

    if (snapshot.exists()) {
        const queue = snapshot.val();

        // find someone else
        for (let otherId in queue) {
            if (otherId !== userId) {
                console.log("Match found!");

                await createSession(userId, userName, otherId, queue[otherId].userName);

                return;
            }
        }
    }

    // no match → join queue
    await joinQueue(userId, userName);
}
async function joinQueue(userId, userName) {
    const queueRef = ref(realTimeDatabase, `waitingQueue/${userId}`);

    await set(queueRef, {
        userId,
        userName,
        joinedAt: Date.now(),
    });

    onDisconnect(queueRef).remove();

    console.log("Waiting for match...");
}
import { push } from "../common/firebase.js";

async function createSession(userA, nameA, userB, nameB) {
    const sessionRef = push(ref(realTimeDatabase, "sessions"));

    const sessionId = sessionRef.key;

    await set(sessionRef, {
        users: {
            [userA]: nameA,
            [userB]: nameB
        },
        createdAt: Date.now()
    });

    // link users to session
    await set(ref(realTimeDatabase, `userSessions/${userA}`), sessionId);
    await set(ref(realTimeDatabase, `userSessions/${userB}`), sessionId);

    // remove both from queue
    await remove(ref(realTimeDatabase, `waitingQueue/${userA}`));
    await remove(ref(realTimeDatabase, `waitingQueue/${userB}`));

    console.log("Session created:", sessionId);
}
import { onValue } from "../common/firebase.js";

function listenForMatch(userId) {
    const sessionRef = ref(realTimeDatabase, `userSessions/${userId}`);

    onValue(sessionRef, (snapshot) => {
        const sessionId = snapshot.val();

        if (sessionId) {
            console.log("Matched! Session:", sessionId);

            startChat(sessionId);
        }
    });
}
function startChat(sessionId) {
    // reuse your chat UI
    window.currentSession = sessionId;

    document.getElementById("Chat-Box").innerText = "Connected to stranger!";
}