module.exports = {
	name: 'eval',
	aliases: ['e'],
	description: 'Evaluate js.',
	usage: "--PREFIX--eval [expression]",
	execute(msg) {
		if (msg.author.id == process.env.admin) {
			var run = msg.content.split(" ").slice(1).join(" ");
			if (!run == "") {
				let evaled = eval(run);
				const embed = {
					"description": "**[never use eval!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!)**",
					"color": 1405905,
					"footer": {
						"text": `v${process.env.version}`
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
				};
				msg.channel.send({ embed });
			} else {
				const embed = {
					"title": "Syntax error",
					"color": 14682891,
					"description": `You used the incorrect syntax.\nPlease refer to Help for usage.\n\`${process.env.prefix}help ${module.exports.name}\``
				};
				msg.channel.send({ embed });
			};
		};
	},
};