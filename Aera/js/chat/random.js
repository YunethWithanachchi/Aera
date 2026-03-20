import { realTimeDatabase } from "../common/firebase.js";
import { ref, set } from "../common/firebase.js";

export function initRandom() {
    const userId   = sessionStorage.getItem("userId");
    const userName = sessionStorage.getItem("userName");

    if (!userId) {
        window.location.href = "/";
        return;
    }

    joinQueue(userId, userName);
}

function joinQueue(userId, userName) {
    const queueRef = ref(realTimeDatabase, `waitingQueue/${userId}`);
    set(queueRef, {
        userId:   userId,
        userName: userName,
        joinedAt: Date.now(),
    });
    console.log("Joined waiting queue...");
}