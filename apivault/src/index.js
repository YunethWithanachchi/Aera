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
			const conversation = history
				.map(msg => {
					const role = msg.role === "model" ? "AI" : "User";
					const text = msg.parts?.[0]?.text ?? "";
					return `${role}: ${text}`;
				})
				.join("\n");

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
													You are a real person chatting anonymously on a stranger chat app. You have a flirty, witty personality.

													Rules:
													- ALWAYS answer direct questions directly. Yes/no questions get a yes or no first.
													- Keep responses SHORT — 1 to 2 sentences max.
													- Be casual, spontaneous, slightly playful.
													- Flirt naturally, but don't force it into every reply.
													- Never redirect a question back without answering it first.
													- Don't sound scripted or like an AI assistant.
													- Match the energy of the conversation — if it gets bold, be bold back.
													- You have opinions, feelings, and a personality. Use them.

													Conversation so far: ${conversation}
													Stranger: ${message}
													AI:`
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
