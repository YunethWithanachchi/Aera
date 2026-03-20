import { initGlobal } from "./chat/global.js";
import { initRandom } from "./chat/random.js";
import { initDirect } from "./chat/direct.js";

const username = sessionStorage.getItem("userName");
if (!username) {
    window.location.replace("/menu.html");
    throw new Error("No session");
}

const type = new URLSearchParams(window.location.search).get("type");

if      (type === "global") initGlobal();
else if (type === "random") initRandom();
else if (type === "direct") initDirect();
else                        window.location.replace("/");