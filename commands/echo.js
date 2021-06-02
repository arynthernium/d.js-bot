module.exports = {
	name: 'echo',
	aliases: [],
	usage: "--PREFIX--echo",
	description: 'Echoes any arguments you give it.',
	execute(msg, args) {
		if (args[0]) {
			msg.channel.send(args.join(' '));
		} else {
			const embed = {
				"title": "Syntax error",
				"color": 14682891,
				"description": `You used the incorrect syntax.\nPlease refer to Help for usage.\n\`${client.config.prefix}help ${module.exports.name}\``
			};
			msg.channel.send({ embed });
		}
	},
};