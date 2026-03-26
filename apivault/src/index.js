export default {
	async fetch(request, env) {

		if (request.method !== "POST") {
			return new Response("Only POST allowed", { status: 405 });
		}

		const { bot, message } = await request.json();

		// ---------------- GEMINI ----------------
		if (bot === "gemini") {
			const res = await fetch(
				"https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=" +
				env.GEMINI_API_KEY,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						contents: [{ parts: [{ text: message }] }]
					})
				}
			);

			const data = await res.json();

			return Response.json({
				reply:
					data?.candidates?.[0]?.content?.parts?.[0]?.text ||
					"No response"
			});
		}

		return Response.json({ reply: "Unknown bot" });
	}
};
