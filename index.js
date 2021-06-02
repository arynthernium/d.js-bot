const Discord = require("discord.js");
const client = new Discord.Client();

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
	const args = msg.content.split(/ +/);
	const command = args.shift().toLowerCase().replace(client.config.prefix, '');

	if (msg.mentions.has(client.user.id)) {
		msg.channel.send(`My prefix is: ${client.config.prefix}`);
	};

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(msg, args, client);
	} catch (error) {
		console.error(error);
		var errorembed = client.errorembed;
		errorembed.timestamp = new Date();
		msg.channel.send({ errorembed });
	};
});