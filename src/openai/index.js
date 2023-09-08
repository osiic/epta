const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const pesan = require("./pesan.json");
const { tambahPesan } = require("./tambahPesan.js");

const createChatCompletion = async (prompt, user = "Penggemar") => {
  const sanitizedUser = user.replace(/[^a-zA-Z0-9_-]/g, ""); // Remove characters that don't match the pattern

  pesan.push({
    role: "user",
    name: sanitizedUser,
    content: prompt,
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: pesan,
    max_tokens: 256,
    temperature: 1,
    top_p: 0.9,
  });

  const generatedMessage = completion.choices[0].message.content;
  await pesan.push({
    role: "assistant",
    name: "epta",
    content: generatedMessage,
  });
  await tambahPesan(pesan);
  return generatedMessage;
};

module.exports = { createChatCompletion };
