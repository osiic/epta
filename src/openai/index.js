const OpenAI = require('openai');
const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

const pesan = require('./pesan.json');
const { tambahPesan } = require('./tambahPesan.js');

const createChatCompletion = async (prompt, user = 'Penggemar') => {
	pesan.push({ role: 'user', content: `${user} berkata ${prompt}` });

	const completion = await openai.chat.completions.create({
		model: 'gpt-3.5-turbo',
		messages: pesan,
		max_tokens: 256,
		temperature: 1,
		top_p: 0.9,
	});

	const generatedMessage = completion.choices[0].message.content;
	await pesan.push({ role: 'assistant', content: generatedMessage });
	await tambahPesan(pesan);
	return generatedMessage;
};

module.exports = { createChatCompletion };
