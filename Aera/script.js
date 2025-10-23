/*
import { db } from "./firebase";
import { collection, addDoc, query, orderBy, onSnapshot, Timestamp } from "./firebase";
*/

//Focus Blinking(Not working -  have to check)
window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Typing-Region").focus();
});

document.getElementById('send').addEventListener('click',sendMessage);
document.getElementById('Typing-Region').addEventListener('keypress',(e)=>{
   if (e.key==='Enter'){
       e.preventDefault()
       sendMessage();
   }
});

function sendMessage(){
    const msg = document.getElementById("Typing-Region").innerText.trim();

    if (msg===""){return;}

    const NewMsg = document.createElement('div');
    NewMsg.classList.add('NewMessage');
    NewMsg.textContent = msg;

    document.getElementById('Chat-Box').appendChild(NewMsg);
    document.getElementById('Typing-Region').innerText='';
    document.getElementById('Typing-Region').focus();

}
// sendBtn.addEventListener("click", sendMessage);
// messageInput.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") sendMessage();
// });
//
// // Real-time listener
// const q = query(collection(db, "messages"), orderBy("timestamp"));
// onSnapshot(q, (snapshot) => {
//     chatMessages.innerHTML = "";
//     snapshot.forEach((doc) => {
//         const data = doc.data();
//         const message = document.createElement("div");
//         message.classList.add("message", data.sender === "me" ? "right" : "left");
//         message.textContent = data.text;
//
//         const ts = document.createElement("span");
//         ts.classList.add("timestamp");
//         ts.textContent = new Date(data.timestamp.toDate()).toLocaleTimeString();
//         message.appendChild(ts);
//
//         chatMessages.appendChild(message);
//     });
//     chatMessages.scrollTop = chatMessages.scrollHeight;
// });
//
// function sendMessage() {
//     const text = messageInput.value.trim();
//     if (!text) return;
//
//     addDoc(collection(db, "messages"), {
//         text: text,
//         sender: "me",
//         timestamp: Timestamp.now()
//     });
//
//     messageInput.value = "";
// }

