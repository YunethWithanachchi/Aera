import { geminiReply } from "./gemini.js";
import { omegleAI } from "./omegleAI.js";

// 🔥 Change this anytime
const AI_MODE = "gemini";
// options: "gemini", "eliza", "random"

export function isAISession(sessionData) {
    return sessionData?.isAI === true;
}

export async function generateAIReply(sessionId, userMsg, sendMessage) {

    let reply;

    switch (AI_MODE) {

        case "gemini":
            reply = await geminiReply(userMsg);
            break;

        case "omegle":
            reply = elizaReply(userMsg);
            break;

        case "random":
            if (Math.random() < 0.7) {
                reply = await geminiReply(userMsg);
            } else {
                reply = elizaReply(userMsg);
            }
            break;

        default:
            reply = "AI not configured.";
    }

    // simulate typing delay (🔥 improves UX a lot)
    await new Promise(res => setTimeout(res, 800));

    await sendMessage(reply);
}