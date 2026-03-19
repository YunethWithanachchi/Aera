import { realTimeDatabase } from "../common/firebase.js";
import { ref, set, serverTimestamp, push, onChildAdded } from "../common/firebase.js";

function init() {
    document.getElementById("Typing-Region").focus();

    document.getElementById("send").addEventListener("click", sendMessage);

    document.getElementById("Typing-Region").addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    });

    document.getElementById("uploadBtn").addEventListener("click", () => {
        window.myWidget.open();
    });

    // ✅ Must be called — this is what populates the chat box
    receivedMessages();
}

// DOM is already ready when this module loads via dynamic import,
// but this guard handles any edge case
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

function sendMessage() {
    let msg = document.getElementById("Typing-Region").innerText.trim(); // ✅ let, not const
    if (!msg) return;

    storeMsg(msg, "text");
    document.getElementById("Typing-Region").innerText = ""; // ✅ clear the div directly
}

async function storeMsg(content, type) {
    const msgReference = push(ref(realTimeDatabase, "globalMessages"));
    await set(msgReference, {
        userID:    sessionStorage.getItem("userId"),
        userName:  sessionStorage.getItem("userName"),
        type:      type,
        msg:       content,
        timeStamp: serverTimestamp(),
    });
    console.log("Message sent successfully");
}

function receivedMessages() {
    const msgReference = ref(realTimeDatabase, "globalMessages");
    onChildAdded(msgReference, (snapshot) => {
        AddToChat(snapshot.val());
    });
}

function AddToChat(RawMsg) {
    const person = RawMsg.userID === sessionStorage.getItem("userId")
        ? "You :"
        : `${RawMsg.userName} :`;

    const time = RawMsg.timeStamp
        ? new Date(RawMsg.timeStamp).toLocaleTimeString()
        : "";

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

window.addEventListener("cloudinary-upload", async (e) => {
    await storeMsg(e.detail, "image");
});