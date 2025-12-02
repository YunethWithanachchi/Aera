
import { realTimeDatabase } from "./firebase";
import { ref, set, serverTimestamp,push, onDisconnect, update,onChildAdded } from "./firebase";
import {storage} from "./firebase";
import {ref as storageRef, uploadBytes, getDownloadURL} from "firebase/storage";

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

    storeMsg(msg,"text").then(r => null);
}

document.querySelector("form").addEventListener("submit",async (e)=>{
    e.preventDefault();
    const username = document.querySelector("input").value.trim();

    if (username){
        const userId = generateUserId();

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

        receivedMessages();
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
async function storeMsg(Msg,type) {
    const msgReference = push(ref(realTimeDatabase, "Messages"));

    const msg = {
        userID: sessionStorage.getItem("userId"),
        userName: sessionStorage.getItem("userName"),
        type: type,
        msg: Msg,
        timeStamp: serverTimestamp(),
    };
    await set(msgReference, msg);
    console.log("Message sent successfully")

}
function receivedMessages(){
    const msgReference = ref(realTimeDatabase,"Messages");

    onChildAdded(msgReference,(snapshot)=>{
        const msg = snapshot.val();
        AddToChat(msg);
    });
}
function AddToChat(RawMsg){
    //finding the person sent
    var person;
    if (RawMsg.userID===sessionStorage.getItem("userId")){
        person = `You :`;
    }else {
        person = `${RawMsg.userName} :`;
    }
    //identifying the type of message
    var NewMsg;
    if (RawMsg.type==='image'){
        NewMsg = document.createElement('img');
        NewMsg.src = RawMsg.msg;
        NewMsg.style.maxWidth ="50vw";
        NewMsg.style.borderRadius = "10px"
        NewMsg.style.margin = "5px 0"

    }else{
        var text = `${person} ${RawMsg.msg}`
        NewMsg = document.createElement('div');
        NewMsg.classList.add('NewMessage');
        NewMsg.textContent = text;
        document.getElementById('Typing-Region').innerText='';
    }

    document.getElementById('Chat-Box').appendChild(NewMsg);
    document.getElementById('Typing-Region').focus();
}

document.getElementById('uploadBtn').addEventListener('click',()=>{
    window.myWidget.open();
});
window.addEventListener('cloudinary-upload',async (e)=>{
    const imageURL = e.detail;
    await storeMsg(imageURL,"image");
});
/*
//uploading an image
//when the button is clicked we trigger the input
document.getElementById('uploadBtn').addEventListener('click',()=>{
    document.getElementById('imageInput').click();
});
//When an image is selected
document.getElementById('imageInput').addEventListener('change',async (event) => {
    const image = event.target.files[0];
    if (!image) {
        return;
    } else {
        await uploadImage(image)
    }
});


// saving image to firebase storage and sending the URL to realTime DB storing
async function uploadImage(file){
    const filepath = `chatImages/${sessionStorage.getItem("userId")}/${Date.now()}_${file.name}`;
    const imgRef = storageRef(storage,filepath);
    await uploadBytes(imgRef,file); //uploading file to storage

    const downloadURL = await getDownloadURL(imgRef);
    await storeMsg(downloadURL, "image")
}
*/


