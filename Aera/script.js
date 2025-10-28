
import { realTimeDatabase } from "./firebase";
import { ref, set, serverTimestamp,push, onDisconnect, update } from "./firebase";

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

function sendMessage() {
    const msg = document.getElementById("Typing-Region").innerText.trim();

    if (msg === "") {
        return;
    }

    storeMsg(msg).then(r => null);
    AddToChat(msg);
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
//look for callback and promise
async function storeMsg(Msg) {
    const messageID = push(ref(realTimeDatabase, "Messages"));

    const msg = {
        userID: UserId,
        userName: UserName,
        msg: Msg,
        timeStamp: serverTimestamp(),
    };
    await set(messageID, msg);
    console.log("Message sent successfully")

}
function AddToChat(msg){

    const NewMsg = document.createElement('div');
    NewMsg.classList.add('NewMessage');
    NewMsg.textContent = msg;

    document.getElementById('Chat-Box').appendChild(NewMsg);
    document.getElementById('Typing-Region').innerText='';
    document.getElementById('Typing-Region').focus();
}


