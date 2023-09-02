require('dotenv').config();
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { createChatCompletion } = require('./openai');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});
const token = process.env.DISCORD_TOKEN;

client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, async (msg) => {
	if (msg.author.bot || msg.channelId != '1058229261552599060') return;

	if (msg.content) {
		const chat = await createChatCompletion(msg.content, msg.author.username);
		if (chat) {
			await msg.channel.send(chat);
		}
	}
});

client.login(token);
