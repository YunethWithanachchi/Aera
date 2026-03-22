import { realTimeDatabase } from "../common/firebase.js";
import { ref, set, onDisconnect, get, remove,onValue, onChildAdded, serverTimestamp  } from "../common/firebase.js";
let sessionId = null;
export async function initRandom() {
    const userId = sessionStorage.getItem("userId");
    const userName = sessionStorage.getItem("userName");

    if (!userId) {
        window.location.href = "/";
        return;
    }

    listenForMatch(userId);
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

function listenForDisconnect() {
    const usersRef = ref(realTimeDatabase, `sessions/${sessionId}/users`);

    onValue(usersRef, (snapshot) => {
        const users = snapshot.val();

        if (!users || Object.keys(users).length < 2) {
            console.log("Stranger disconnected");

            handleStrangerLeft();
        }
    });
}

function handleStrangerLeft() {
    const chatBox = document.getElementById("Chat-Box");

    const msg = document.createElement("div");
    msg.textContent = "⚠️ Stranger has disconnected.";
    msg.style.color = "red";

    chatBox.appendChild(msg);

    const sessionRef = ref(realTimeDatabase, `sessions/${sessionId}`);
    remove(sessionRef);

    // optional: disable sending
    sessionId = null;
}

function startChat(Id) {

    window.currentSession =Id;
    sessionId =Id;
    const userId = sessionStorage.getItem("userId");

    const userSessionRef = ref(realTimeDatabase,`sessions/${sessionId}/users/${userId}`);
    onDisconnect(userSessionRef).remove();

    document.getElementById("Chat-Box").innerText = "Connected to stranger!";
    document.getElementById("Chat-Box").innerText = "Connected to stranger!";
    receivedMessages();
    listenForDisconnect();
}

function sendMessage() {
    let msg = document.getElementById("Typing-Region").innerText.trim();
    if (!msg) return;
    storeMsg(msg, "text");
    document.getElementById("Typing-Region").innerText = "";
}

async function storeMsg(content, type) {
    const msgReference = push(ref(realTimeDatabase, `sessions/${sessionId}/messages`));
    await set(msgReference, {
        userID: sessionStorage.getItem("userId"),
        userName: sessionStorage.getItem("userName"),
        type: type,
        msg: content,
        timeStamp: serverTimestamp(),
    });
}

function receivedMessages() {
    onChildAdded(ref(realTimeDatabase, `sessions/${sessionId}/messages`), (snapshot) => {
        AddToChat(snapshot.val());
    });
}

function AddToChat(RawMsg) {
    const person = RawMsg.userID === sessionStorage.getItem("userId") ? "You :" : `${RawMsg.userName} :`;
    const time = RawMsg.timeStamp ? new Date(RawMsg.timeStamp).toLocaleTimeString() : "";
    let NewMsg;
    if (RawMsg.type === "image") {
        NewMsg = document.createElement("img");
        NewMsg.src = RawMsg.msg;
        NewMsg.style.cssText = "max-width:50vw;border-radius:10px;margin:5px 0";
    } else {
        NewMsg = document.createElement("div");
        NewMsg.classList.add("NewMessage");
        NewMsg.textContent = `${person} ${RawMsg.msg} ${time}`;
    }
    document.getElementById("Chat-Box").appendChild(NewMsg);
    document.getElementById("Typing-Region").focus();
}

window.addEventListener("cloudinary-upload", async (e) => { await storeMsg(e.detail, "image"); });

document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.getElementById("send");
    const typingBox = document.getElementById("Typing-Region");

    if (sendBtn) {
        sendBtn.addEventListener("click", sendMessage);
    }

    if (typingBox) {
        typingBox.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                sendMessage();
            }
        });
    }
});