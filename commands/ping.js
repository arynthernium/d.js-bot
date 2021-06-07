module.exports = {
	name: 'latency',
	aliases: ["ping", "p", "l", "lat"],
	usage: "--PREFIX--latency",
	description: 'Returns "Alive!" if the bot is online.',
	execute(msg, args, client) {
		const embed = {
			"title": "Latency",
			"color": 16755200,
			"footer": {
				"text": `v${client.config.version}`
			},
			"fields": [
				{
					"name": "Message Latency",
					"value": Date.now() - msg.createdTimestamp + "ms",
					"inline": true
				},
				{
					"name": "API Latency",
					"value": Math.round(client.ws.ping) + "ms",
					"inline": true
				}
			]
		}
		msg.channel.send({ embed });
	},
};