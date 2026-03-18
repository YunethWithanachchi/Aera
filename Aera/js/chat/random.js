import { realTimeDatabase } from "../common/firebase.js";
import { ref, set } from "../common/firebase.js";

const userId = sessionStorage.getItem("userId");
const userName = sessionStorage.getItem("userName");

if (!userId) {
    alert("User not logged in");
    window.location.href = "menu.html";
}

window.addEventListener("DOMContentLoaded", () => {
    joinQueue();
});

function joinQueue() {
    const queueRef = ref(realTimeDatabase, `waitingQueue/${userId}`);

    set(queueRef, {
        userId: userId,
        userName: userName,
        joinedAt: Date.now()
    });

    console.log("Joined waiting queue...");
}