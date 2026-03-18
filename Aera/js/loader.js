const params = new URLSearchParams(window.location.search);
const type = params.get("type");

let script = document.createElement("script");
script.type = "module";

if (type === "global") {
    script.src = "./js/chat/global.js";
} else if (type === "random") {
    script.src = "./js/chat/random.js";
} else if (type === "direct") {
    script.src = "./js/chat/direct.js";
} else {
    alert("Invalid chat type");
}

document.body.appendChild(script);