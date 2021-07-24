const Discord = require("discord.js");
const client = new Discord.Client();

const parseWords = (words = '') =>
	(words.match(/[^\s"]+|"([^"]*)"/gi) || []).map((word) =>
		word.replace(/^"(.+(?="$))"$/, '$1'))
const getopts = require('getopts');

client.config = require('./config.js');

client.login(client.config.token);
delete client.config.token;

client.on('ready', () => {
	console.info(`Running as: ${client.user.tag}`);
});

client.commands = new Discord.Collection();
const clientCommands = require('./commands');
Object.keys(clientCommands).map(key => {
	client.commands.set(clientCommands[key].name, clientCommands[key]);
	clientCommands[key].aliases.forEach(alias => {
		client.commands.set(alias, clientCommands[key]);
	});
});

client.errorembed = { "title": "Error", "description": "An internal error occurred.", "color": 14682891, "footer": { "text": `v${client.config.version}` } };

client.on('message', msg => {
	if (msg.mentions.has(client.user.id)) {
		msg.channel.send(`My prefix is: ${client.config.prefix}`);
	};

	if (msg.content.startsWith(client.config.prefix)) {
		const args = msg.content.split(' ');
		const command = args.shift().toLowerCase().replace(client.config.prefix, '');
		const params = getopts(parseWords(args.join(' ')));

		if (!client.commands.has(command)) return;

		try {
			client.commands.get(command).execute(msg, params, client, args);
		} catch (error) {
			console.error(error);
			var errorembed = client.errorembed;
			errorembed.timestamp = new Date();
			msg.channel.send({ errorembed });
		};
	};
});