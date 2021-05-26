module.exports = {
	apps: [{
		name: "/path/to/bot/dir",
		script: "../index.js",
		env: {
			NODE_ENV: "development",
		},
		env_production: {
			NODE_ENV: "production",
		}
	}]
}