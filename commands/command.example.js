module.exports = {
	name: 'commandname', // the initial name of the command
	aliases: [], // aliases in array format. add individual strings to it and they will be mapped to the command.
	usage: "--PREFIX--commandname", // the default usage of the command, to show in the help command.
	description: 'Returns "Alive!" if the bot is online.', // the description of the command, to show in the help command.
	execute(msg, args) {
		msg.channel.send('Alive!');
	}, // the javascript to be run when the command is heard.
};