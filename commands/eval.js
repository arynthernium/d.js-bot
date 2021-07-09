module.exports = {
	name: 'eval',
	aliases: ['e'],
	description: 'Evaluate js.',
	usage: `--PREFIX--eval "[expression]"`,
	execute(msg, params, client) {
		var run = params._[0];
		if (msg.author.id == client.config.admin && run) {
			let evaled = eval(run);
			const embed = {
				"description": "**[never use eval!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!)**",
				"color": 1405905,
				"footer": {
					"text": `v${client.config.version}`
				},
				"fields": [
					{
						"name": "input",
						"value": `\`\`\`${run}\`\`\``
					},
					{
						"name": "output",
						"value": `\`\`\`${evaled}\`\`\``
					},
					{
						"name": "type",
						"value": `\`\`\`${typeof evaled}\`\`\``
					}
				]
			}
			msg.channel.send({ embed })
				.catch(err => {
					console.error(err);
				});
		} else {
			const embed = {
				"title": "Missing permissions.",
				"color": 14682891,
				"description": "This command is restricted."
			};
			msg.channel.send({ embed });
		};
	}
};