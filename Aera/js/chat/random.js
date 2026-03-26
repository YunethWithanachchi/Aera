import { realTimeDatabase } from "../common/firebase.js";
import { ref, set, onDisconnect, get, remove,onValue,push, onChildAdded, serverTimestamp,runTransaction} from "../common/firebase.js";
import {isAISession, generateAIReply} from "../ai/ai.js";
import { geminiReply } from "../ai/gemini.js";

(async () => {
    const reply = await geminiReply("Hello AI");
    console.log("AI says:", reply);
})();
let sessionId = null;
let isInitialized = false;
let isDisconnectedHandled = false;
let unsubscribeMatch = null;
let messagesListener = null;
let isAIThinking = false;
export async function initRandom() {
    if (isInitialized) return;
    isInitialized = true;
    leaveChatBtn();
    const userId = sessionStorage.getItem("userId");
    const userName = sessionStorage.getItem("userName");

    if (!userId) {
        window.location.href = "/";
        return;
    }

    document.querySelector("main").style.display = "block";
    document.getElementById("Chat-Box").innerHTML = "";

    listenForMatch(userId);
    await tryMatch(userId, userName);

    // 🔥 Force check (fix delayed connection issue)
    const snap = await get(ref(realTimeDatabase, `userSessions/${userId}`));
    if (snap.exists()) {
        startChat(snap.val());
    }
}

function leaveChatBtn(){
    const btn = document.getElementById("skipBtn");

    btn.textContent = "Skip";

    btn.onclick = ()=>{
        skipStranger();
    };
}

async function tryMatch(userId, userName) {

    const AI_PROBABILITY = 0.3;
    if (Math.random()<AI_PROBABILITY){
        await createAISession(userId,userName);
        return;
    }
    const queueRef = ref(realTimeDatabase, "waitingQueue");

    let match = null;

    const result = await runTransaction(queueRef, (queue) => {
        if (!queue) queue = {};

        // find someone else
        for (let otherId in queue) {
            if (otherId === userId) continue;

            const otherUser = queue[otherId];

            // remove both users from queue
            delete queue[otherId];
            delete queue[userId];

            // store match locally (NOT in DB)
            match = {
                userA: userId,
                nameA: userName,
                userB: otherId,
                nameB: otherUser.userName
            };

            return queue;
        }

        // no match → add self
        return {
            ...queue,
            [userId]: {
                userId,
                userName,
                joinedAt: Date.now()
            }
        };
    });

    // If a match was found
    if (result.committed && match) {

        // ✅ Only ONE user creates session (prevents duplicates)
        if (match.userA === userId) {
            await createSession(
                match.userA,
                match.nameA,
                match.userB,
                match.nameB
            );
        }

    } else {
        showLookingUI();
    }
}
function showLookingUI() {
    const chatBox = document.getElementById("Chat-Box");
    chatBox.innerHTML = "";

    const status = document.createElement("div");
    status.textContent = "🔍 Looking for a match...";
    status.id = "status-msg";

    chatBox.appendChild(status);
}

async function createSession(userA, nameA, userB, nameB) {
    const sessionRef = push(ref(realTimeDatabase, "sessions"));
    const sessionId = sessionRef.key;

    await set(sessionRef, {
        users: {
            [userA]: nameA,
            [userB]: nameB
        },
        status:"active",
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
    if (unsubscribeMatch) { unsubscribeMatch(); unsubscribeMatch = null; }

    unsubscribeMatch = onValue(ref(realTimeDatabase, `userSessions/${userId}`), (snapshot) => {
        const id = snapshot.val();
        if (id && !sessionId) {
            // ✅ Unsubscribe immediately — job is done, don't accumulate
            if (unsubscribeMatch) { unsubscribeMatch(); unsubscribeMatch = null; }
            startChat(id);
        }
    });
}

function listenForDisconnect() {
    const statusRef = ref(realTimeDatabase, `sessions/${sessionId}/status`);

    onValue(statusRef, (snapshot) => {
        const status = snapshot.val();

        if (status === "ended" && !isDisconnectedHandled) {
            isDisconnectedHandled = true;
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

    // optional: disable sending
    sessionId = null;
}

async function startChat(Id) {

    isDisconnectedHandled =false;
    window.currentSession =Id;
    sessionId =Id;

    const sessionSnap = await get(ref(realTimeDatabase, `sessions/${sessionId}`));
    const sessionData = sessionSnap.val();

    window.isAISession = isAISession(sessionData);

    const userId = sessionStorage.getItem("userId");

    onDisconnect(ref(realTimeDatabase, `sessions/${sessionId}/status`)).set("ended");
    onDisconnect(ref(realTimeDatabase, `sessions/${sessionId}/users/${userId}`)).remove();
    onDisconnect(ref(realTimeDatabase,`userSessions/${userId}`)).remove();

    document.getElementById("status-msg")?.remove();

    const chatBox = document.getElementById("Chat-Box");
    chatBox.innerHTML = "";

    const msg = document.createElement("div");
    msg.textContent = "✅ Connected to stranger!";
    msg.style.color = "green";
    chatBox.appendChild(msg);

    receivedMessages();
    listenForDisconnect();
}

function sendMessage() {
    if (!sessionId) return;

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
    if (messagesListener) {
        messagesListener();
        messagesListener = null;
    }

    let isInitialLoad = true;

    const messagesRef = ref(realTimeDatabase, `sessions/${sessionId}/messages`);

    messagesListener = onChildAdded(messagesRef, async (snapshot) => {
        const msg = snapshot.val();

        AddToChat(msg);

        // 🚫 Ignore old messages (VERY IMPORTANT)
        if (isInitialLoad) return;

        // 🤖 AI response trigger
        if (window.isAISession && msg.userID !== "ai-bot") {
            await generateAIReply(sessionId, msg.msg, storeAIMessage);
        }
    });

    // ✅ After initial batch is loaded
    setTimeout(() => {
        isInitialLoad = false;
    }, 500);
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

async function skipStranger(){
    if (messagesListener){messagesListener();messagesListener=null;}
    if (unsubscribeMatch) { unsubscribeMatch(); unsubscribeMatch = null; }

    const userId = sessionStorage.getItem("userId");

    if (sessionId) {
        // In a chat — notify stranger and end session
        await set(ref(realTimeDatabase, `sessions/${sessionId}/status`), "ended");
        // ✅ Clean up userSessions so stale ID doesn't fire listenForMatch immediately on next attach
        await remove(ref(realTimeDatabase, `userSessions/${userId}`));
        sessionId = null;
    } else {
        // ✅ Still in queue (no match yet) — remove from queue so we can rejoin fresh
        await remove(ref(realTimeDatabase, `waitingQueue/${userId}`));
    }

    isInitialized = false;
    isDisconnectedHandled = false;

    // restart matching
    initRandom();
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

async function createAISession(userId, userName) {
    const sessionRef = push(ref(realTimeDatabase, "sessions"));
    const sessionId = sessionRef.key;

    await set(sessionRef, {
        users: {
            [userId]: userName,
            "ai-bot": "Stranger"
        },
        isAI: true,
        status: "active",
        createdAt: Date.now()
    });

    await set(ref(realTimeDatabase, `userSessions/${userId}`), sessionId);
}

async function storeAIMessage(content) {
    const msgReference = push(ref(realTimeDatabase, `sessions/${sessionId}/messages`));

    await set(msgReference, {
        userID: "ai-bot",
        userName: "Stranger",
        type: "text",
        msg: content,
        timeStamp: serverTimestamp(),
    });
}