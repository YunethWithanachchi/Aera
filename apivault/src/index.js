export default {
	async fetch(request, env) {

		// ✅ Handle CORS preflight
		if (request.method === "OPTIONS") {
			return new Response(null, {
				headers: corsHeaders()
			});
		}

		if (request.method !== "POST") {
			return new Response("Only POST allowed", {
				status: 405,
				headers: corsHeaders()
			});
		}

		try {
			const { bot, message,history = [] } = await request.json();
			const conversation = history.map(msg => `Stranger: ${msg}`).join("\n");

			if (bot === "gemini") {
				const res = await fetch(
					"https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=" +
					env.GEMINI_API_KEY,
					{
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							contents: [
								{
									role: "user",
									parts: [
										{
											text: `
												You are a friendly, slightly witty stranger in an anonymous chat app.

												Rules:
												- Keep responses SHORT (1–2 sentences max)
												- Be casual and human-like
												- Use a bit of humor when appropriate
												- Don't sound like an AI assistant
												- No long explanations
												- Act like you're chatting, not teaching
												- Have a very flirty nature
												- Be interested to know the other stranger well where needed

												Conversation so far: ${conversation}
												User: ${message}
												`
										}
									]
								}
							]
						})
					}
				);

				const data = await res.json();

				return new Response(JSON.stringify({
					reply:
						data?.candidates?.[0]?.content?.parts?.[0]?.text ||
						"No response"
				}), {
					headers: {
						"Content-Type": "application/json",
						...corsHeaders()
					}
				});
			}

			return new Response(JSON.stringify({ error: "Unknown bot" }), {
				status: 400,
				headers: {
					"Content-Type": "application/json",
					...corsHeaders()
				}
			});

		} catch (err) {
			return new Response(JSON.stringify({
				error: "Server error",
				details: err.message
			}), {
				status: 500,
				headers: {
					"Content-Type": "application/json",
					...corsHeaders()
				}
			});
		}
	}
};

// 🔥 CORS helper
function corsHeaders() {
	return {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "Content-Type",
		"Access-Control-Allow-Methods": "POST, OPTIONS"
	};
}
