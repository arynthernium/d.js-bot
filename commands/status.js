module.exports = {
	name: 'status',
	usage: "--PREFIX--status",
	description: 'Sends the bot\'s running status.',
	execute(msg, args) {
		msg.channel.send('Alive!');
	},
};