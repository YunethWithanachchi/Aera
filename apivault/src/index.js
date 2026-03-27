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
			const { bot, message } = await request.json();

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
