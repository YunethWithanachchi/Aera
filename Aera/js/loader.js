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

try {
    await modules[type]();
} catch (err) {
    console.error("Failed to load chat module:", err);
    window.location.replace("./menu.html");
}