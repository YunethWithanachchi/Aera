// loader.js
const username = sessionStorage.getItem("userName");
if (!username) {
    window.location.replace("./menu.html");
    throw new Error("No session — redirecting");
}

const params = new URLSearchParams(window.location.search);
const type = params.get("type");

const VALID = ["global", "random", "direct"];
if (!VALID.includes(type)) {
    window.location.replace("./menu.html");
    throw new Error(`Invalid chat type: ${type}`);
}

// ✅ Explicit imports — Vite can statically analyze all three
const modules = {
    global: () => import("./chat/global.js"),
    random: () => import("./chat/random.js"),
    direct: () => import("./chat/direct.js"),
};

try {import { initGlobal } from "./chat/global.js";
import { initRandom } from "./chat/random.js";
import { initDirect } from "./chat/direct.js";

// Guard: if no session, send back to menu
    const username = sessionStorage.getItem("userName");
    if (!username) {
        window.location.replace("/");
        throw new Error("No session — redirecting to menu");
    }

// Read ?type= from URL (works whether path is /chat or /index.html)
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");

    if      (type === "global") initGlobal();
    else if (type === "random") initRandom();
    else if (type === "direct") initDirect();
    else                        window.location.replace("/");
    await modules[type]();
} catch (err) {
    console.error("Failed to load chat module:", err);
    window.location.replace("./menu.html");
}