import { realTimeDatabase } from "./common/firebase.js";
import { ref, set, serverTimestamp } from "./common/firebase.js";

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.querySelector("input").value.trim();

    if (username) {
        const userId = generateUserId();

        sessionStorage.setItem("userId", userId);
        sessionStorage.setItem("userName", username);

        const userRef = ref(realTimeDatabase, `users/${userId}`);
        await set(userRef, {
            username,
            userId,
            online: true,
            lastActive: serverTimestamp()
        });

        document.getElementsByClassName("FirstView")[0].style.display = "none";
        document.querySelector(".menu-container").style.display = "flex";
    }
});

function generateUserId() {
    if (crypto?.randomUUID) return crypto.randomUUID();
    if (crypto?.getRandomValues) {
        const array = new Uint32Array(4);
        crypto.getRandomValues(array);
        return array.join("-");
    }
    return "user-" + Math.floor(Math.random() * 1000000);
}

// ✅ Use /chat route — Firebase explicitly rewrites this to index.html
window.goToGlobal = function () { window.location.href = "/chat?type=global"; };
window.goToRandom = function () { window.location.href = "/chat?type=random"; };
window.goToDirect = function () { window.location.href = "/chat?type=direct"; };

// Auto-login if session exists
window.addEventListener("DOMContentLoaded", () => {
    const existingUser = sessionStorage.getItem("userName");
    if (existingUser) {
        document.querySelector(".FirstView").style.display = "none";
        document.querySelector(".menu-container").style.display = "flex";
    }
});