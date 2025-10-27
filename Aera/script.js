
import { realTimeDatabase } from "./firebase";
import { ref, set, serverTimestamp, onDisconnect, update } from "./firebase";

var UserId=null;
var UserName=null;
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

    storeDB();

    const NewMsg = document.createElement('div');
    NewMsg.classList.add('NewMessage');
    NewMsg.textContent = msg;

    document.getElementById('Chat-Box').appendChild(NewMsg);
    document.getElementById('Typing-Region').innerText='';
    document.getElementById('Typing-Region').focus();

}

document.querySelector("form").addEventListener("submit",async (e)=>{
    e.preventDefault();
    const username = document.querySelector("input").value.trim();

    if (username){
        const userId = generateUserId();
        UserId = userId;
        UserName = username;
        sessionStorage.setItem("userId",userId);
        sessionStorage.setItem('userName',username);

        const userRef = ref(realTimeDatabase,`users/${userId}`);
        await set(userRef,{
            username,
            userId,
            online : true,
            lastActive: serverTimestamp()
        });
        alert(`Welcome ${username}! You are now logged in.`);
        document.getElementsByClassName('FirstView')[0].style.display = 'none';
        document.querySelector('main').style.display = 'block';
    }
});

function generateUserId(){
    if (crypto?.randomUUID){
        //Moder Browsers
        return crypto.randomUUID();
    }else if (crypto?.getRandomValues){
        // Slightly older browsers, fallback
        const array = new Uint32Array(4);
        crypto.getRandomValues(array);
        return array.join('-');
    }else{
        //Really old browsers or Internet explorer
        return "user-"+Math.floor(Math.random()*1000000);
    }
}
function storeDB(){
    const msg = {
        userID : UserId,
        userName : UserName
    }
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

