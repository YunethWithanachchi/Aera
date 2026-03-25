import { realTimeDatabase } from "../common/firebase.js";
import { ref, set, onDisconnect, get, remove,onValue, onChildAdded, serverTimestamp  } from "../common/firebase.js";
let sessionId = null;
let isInitialized = false;
let isDisconnectedHandled = false;
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

    listenForMatch(userId);
    await tryMatch(userId, userName);
}

function leaveChatBtn(){
    const btn = document.getElementById("skipBtn");

    btn.textContent = "Skip";

    btn.onclick = ()=>{
        skipStranger();
    };
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

    const status = document.createElement("div");
    const chatBox =document.getElementById("Chat-Box");
    chatBox.innerHTML="";
    status.textContent =  "🔍 Looking for a match...";
    status.id = "status-msg";
    chatBox.appendChild(status);
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

    if (isDisconnectedHandled) return;

    const chatBox = document.getElementById("Chat-Box");

    const msg = document.createElement("div");
    msg.textContent = "⚠️ Stranger has disconnected.";
    msg.style.color = "red";

    chatBox.appendChild(msg);

    // optional: disable sending
    sessionId = null;
}

function startChat(Id) {

    isDisconnectedHandled =false;
    window.currentSession =Id;
    sessionId =Id;

    const userId = sessionStorage.getItem("userId");

    onDisconnect(ref(realTimeDatabase, `sessions/${sessionId}/status`)).set("ended");
    onDisconnect(ref(realTimeDatabase, `sessions/${sessionId}/users/${userId}`)).remove();

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

function skipStranger(){
    if (!sessionId) return;

    set(ref(realTimeDatabase,`sessions/${sessionId}/status`),"ended");
    sessionId = null;
    isInitialized = false;

    // clear UI
    const chatBox = document.getElementById("Chat-Box");
    chatBox.innerHTML ="";
    chatBox.innerHTML = "<div>🔍 Looking for a new match...</div>";

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