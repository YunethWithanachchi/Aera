export async function geminiReply(userMsg) {
    const res = await fetch("https://apivault.apivault.workers.dev", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            bot: "gemini",
            message: userMsg
        })
    });

    const data = await res.json();
    return data.reply;
}