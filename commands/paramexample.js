module.exports = {
	name: 'paramexample',
	aliases: [],
	usage: "--PREFIX--params [params]",
	description: 'Sends stringified params object.',
	execute(msg, params, client, args) {
		msg.channel.send("```js\n" + JSON.stringify(params, null, "\t") + "\n```");
	},
};