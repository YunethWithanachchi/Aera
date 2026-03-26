export function isAISession(sessionData) {
    return sessionData?.isAI === true;
}

export async function generateAIReply(sessionId, userMessage, storeAIMessage) {
    const replies = [
        "haha true 😂",
        "where are you from?",
        "that's interesting",
        "lol same",
        "I didn’t expect that",
        "tell me more about that"
    ];

    const reply = replies[Math.floor(Math.random() * replies.length)];

    // simulate human typing delay
    setTimeout(() => {
        storeAIMessage(reply);
    }, 1000 + Math.random() * 2000);
}