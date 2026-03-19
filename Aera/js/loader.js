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

// Dynamic import() — Vite understands this and creates proper code-split chunks
try {
    await import(`./chat/${type}.js`);
} catch (err) {
    console.error("Failed to load chat module:", err);
    window.location.replace("./menu.html");
}