const GEMINI_API_KEY = "AIzaSyDij2fnmW2L7e6y8doDXkiUfsI_iMsQquc";

export async function geminiReply(userMsg) {
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${GEMINI_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            inputs: userMsg,
        })
    });

    const data = await response.json();
    return data.text || "Interesting…";
}