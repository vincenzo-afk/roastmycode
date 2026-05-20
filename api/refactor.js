// Vercel Serverless Function — Emergency Refactor
// The GROQ_API_KEY is stored in Vercel environment variables

const GROQ_MODEL = "llama-3.3-70b-versatile";
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GROQ_API_KEY not configured on server' });
  }

  const { code, language } = req.body;
  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  const systemPrompt = `You are a senior engineer performing an emergency refactor. The user's code is a crime scene.
First write 2-3 sentences roasting how bad the original code is. Then write the refactored version in a code block.
Keep the language the same. Make it production-ready, clean, with comments.
Then write a "Damage Assessment" comparing before/after.

Return in this format:

ROAST: <your 2-3 sentence roast>

REFACTORED:
\`\`\`<language>
<refactored code>
\`\`\`

DAMAGE ASSESSMENT:
- Lines of Code: <before> → <after>
- Complexity: <rating> → <rating>
- Readability: <rating> → <rating>

WHAT WAS FIXED:
- <fix 1>
- <fix 2>
- <fix 3>`;

  const userMessage = `Please refactor this ${language || 'auto'} code:\n\n\`\`\`${language !== 'auto' ? language : ''}\n${code}\n\`\`\``;

  try {
    const groqRes = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage }
        ],
        max_tokens: 2000,
        temperature: 0.7
      })
    });

    if (!groqRes.ok) {
      const errorText = await groqRes.text().catch(() => '');
      return res.status(groqRes.status).json({
        error: `Groq API error: ${groqRes.status}`,
        detail: errorText
      });
    }

    const data = await groqRes.json();
    const text = data.choices[0]?.message?.content || '';

    return res.status(200).json({ content: text });
  } catch (err) {
    console.error('Refactor proxy error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
