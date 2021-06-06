module.exports = {
	name: 'help',
	aliases: ['h'],
	description: 'help command.',
	usage: "--PREFIX--help [commandname]",
	execute(msg, args, client) {
		if (client.commands.has(args[0])) {
			var cmdobj = client.commands.get(args[0]);
			const embed = {
				"title": "Help",
				"description": "<parameter> is a required parameter.\nThe command will return a syntax error if this is not provided.\n[parameter] is an optional parameter.\nThese are for optional functionality.",
				"color": 290844,
				"timestamp": new Date(),
				"footer": {
					"text": `v${client.config.version}`
				},
				"author": {
					"name": msg.author.tag,
					"icon_url": msg.author.displayAvatarURL()
				},
				"fields": [
					{
						"name": "Command",
						"value": cmdobj.name
					},
					{
						"name": "Description",
						"value": cmdobj.description
					},
					{
						"name": "Usage",
						"value": "```" + cmdobj.usage.replace("--PREFIX--", client.config.prefix) + "```"
					}
				]
			};
			msg.channel.send({ embed });
		} else {
			var cmdobj = client.commands.get("help");
			const embed = {
				"title": "Help",
				"color": 290844,
				"timestamp": new Date(),
				"footer": {
					"text": `v${client.config.prefix}`
				},
				"author": {
					"name": msg.author.tag,
					"icon_url": msg.author.displayAvatarURL()
				},
				"fields": [
					{
						"name": "Command",
						"value": cmdobj.name
					},
					{
						"name": "Description",
						"value": cmdobj.description
					},
					{
						"name": "Usage",
						"value": "```" + cmdobj.usage.replace("--PREFIX--", client.config.prefix) + "```"
					}
				]
			};
			msg.channel.send({ embed });
		}
	},
};