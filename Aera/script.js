import { db } from "./firebase.js";
import { collection, addDoc, query, orderBy, onSnapshot, Timestamp } from "firebase/firestore";

const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

// Real-time listener
const q = query(collection(db, "messages"), orderBy("timestamp"));
onSnapshot(q, (snapshot) => {
    chatMessages.innerHTML = "";
    snapshot.forEach((doc) => {
        const data = doc.data();
        const message = document.createElement("div");
        message.classList.add("message", data.sender === "me" ? "right" : "left");
        message.textContent = data.text;

        const ts = document.createElement("span");
        ts.classList.add("timestamp");
        ts.textContent = new Date(data.timestamp.toDate()).toLocaleTimeString();
        message.appendChild(ts);

        chatMessages.appendChild(message);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

function sendMessage() {
    const text = messageInput.value.trim();
    if (!text) return;

    addDoc(collection(db, "messages"), {
        text: text,
        sender: "me",
        timestamp: Timestamp.now()
    });

    messageInput.value = "";
}
