export function omegleAI(msg) {
    const text = msg.toLowerCase();

    const reply ="";

    if (text.includes("sad")) reply= "Why do you feel sad?";
    if (text.includes("happy")) reply = "What makes you feel happy?";
    if (text.includes("hello")) reply= "Hello. How are you?";
    const replies = [
        "haha true 😂",
        "where are you from?",
        "that's interesting",
        "lol same",
        "I didn’t expect that",
        "tell me more about that"
    ];
    reply = replies[Math.floor(Math.random() * replies.length)];
    setTimeout(() => {
        return reply;
    }, 1000 + Math.random() * 2000);

}