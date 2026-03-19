
import { realTimeDatabase } from "../common/firebase.js";
import { ref, set, serverTimestamp,push, onDisconnect, update,onChildAdded } from "../common/firebase.js";
//import {storage} from "../common/firebase";
import {ref as storageRef, uploadBytes, getDownloadURL} from "firebase/storage";

// DOM is already ready (module loaded after page load), but guard anyway
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

        receivedMessages();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init(); // DOM already ready
}

function sendMessage() {
    let msg = document.getElementById("Typing-Region").innerText.trim();
    document.getElementById("Typing-Region").innerText = "";
    if (msg === "") {
        return;
    }

    storeMsg(msg,"text").then(r => null);

}

//look for callback and promise
async function storeMsg(Msg,type) {
    const msgReference = push(ref(realTimeDatabase, "globalMessages"));

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
    const msgReference = ref(realTimeDatabase,"globalMessages");

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
    //time
    const time = RawMsg.timeStamp
        ? new Date(RawMsg.timeStamp).toLocaleTimeString()
        : "";
    //identifying the type of message
    var NewMsg;
    if (RawMsg.type==='image'){
        NewMsg = document.createElement('img');
        NewMsg.src = RawMsg.msg;
        NewMsg.style.maxWidth ="50vw";
        NewMsg.style.borderRadius = "10px"
        NewMsg.style.margin = "5px 0"

    }else{
        var text = `${person} ${RawMsg.msg} ${time}`;
        NewMsg = document.createElement('div');
        NewMsg.classList.add('NewMessage');
        NewMsg.textContent = text;
    }

    document.getElementById('Chat-Box').appendChild(NewMsg);
    document.getElementById('Typing-Region').focus();
}

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


