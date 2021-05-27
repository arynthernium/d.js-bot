module.exports = {
	name: 'eval',
	description: 'Evaluate js.',
	usage: "--PREFIX--eval [javascript expression]",
	execute(msg, args, client) {
		if (msg.author.id == process.env.ADMIN) {
			var result = msg.content.split(" ").slice(1).join(" ")
			if (!result == "") {
				let evaled = eval(result);
				const embed = {
					"description": "**[never use eval!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!)**",
					"color": 1405905,
					"footer": {
						"text": `v${process.env.prefix}`
					},
					"fields": [
						{
							"name": "input",
							"value": `\`\`\`${result}\`\`\``
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
				};
				msg.channel.send({ embed });
			} else {
				const embed = {
					"title": "Syntax error",
					"color": 14682891,
					"description": `You used the incorrect syntax.\nPlease refer to Help for usage.\n\`${process.env.prefix}help eval\``
				};
				msg.channel.send({ embed });
			};
		};
	},
};