import { realTimeDatabase } from "./common/firebase.js";
import { ref, set, serverTimestamp } from "./common/firebase.js";
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
        //hide login
        document.getElementsByClassName('FirstView')[0].style.display = 'none';
        //show menu
        document.querySelector(".menu-container").style.display = 'flex';

    }
});

function generateUserId(){
    if (crypto?.randomUUID){
        //Modern Browsers
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

// Navigation based on menu selection

window.goToGlobal = function (){
    window.location.href = "index.html?type=global";
};
window.goToRandom = function (){
    window.location.href = "index.html?type=random";
};
window.goToDirect = function () {
    window.location.href = "index.html?type=direct";
};

//Auto login if user exist in session

window.addEventListener("DOMContentLoaded",()=>{
    const existingUser = sessionStorage.getItem("userName");

    if (existingUser){
        document.querySelector(".FirstView").style.display = "none";
        document.querySelector(".menu-container").style.display = "flex";
    }
})