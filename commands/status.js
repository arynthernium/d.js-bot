module.exports = {
	name: 'status',
	aliases: [],
	usage: "--PREFIX--status",
	description: 'Returns "Alive!" if the bot is online.',
	execute(msg, args) {
		msg.channel.send('Alive!');
	},
};