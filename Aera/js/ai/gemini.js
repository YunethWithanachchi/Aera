const GEMINI_API_KEY = "AIzaSyDZRfd440zFJJScNnUVECJnC4HzLMzJhmg";

export async function geminiReply(userMsg) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        { text: userMsg }
                    ]
                }
            ]
        })
    });

    const data = await response.json();

    console.log("Gemini raw response:", data); // 🔥 DEBUG

    return data?.candidates?.[0]?.content?.parts?.[0]?.text
        || "Hmm… I didn't understand that.";
}