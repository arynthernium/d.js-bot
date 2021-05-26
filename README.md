# d.js-bot
A discord bot with a command handler.

### Requirements
Node.js >=12.x.x
npm >=6.x.x

### Installation
```bash
git clone https://github.com/arynthernium/d.js-bot
cd d.js-bot
npm i
```

### Setup
Your `.env` file will need some things.
First, rename `example.env` to just `.env`
Add your bot token to the file after `token=` and your discord user id after `admin=` so the file looks like this:
```bash
token=xxxxxxxxxxxxxxxxxxxxxxxx.xxxxxx.xxxxxxxxxxxxxx_xxxxxxxxxxxx
admin=000000000000000000
version=1.0.0
prefix=..
```
Your discord user id is necessary for eval, but not entirely necessary. The eval command will not work at all without it or with it set to an invalid value.
You may want to change the prefix, but that's not necessary if you don't want to.
The version only really applies if you make changes, but it displays in embeds footers. Shouldn't make too much of a difference if you remove the version from embed footers.

### Running
```bash
cd path/to/d.js-bot
node index.js
```
Other options are also available. I've included a systemd service file, a pm2 config, and a forever config under the startup/ folder.
You'll need to modify these with the path to your bot files. Usually, this will be in /home/you/d.js-bot/.

https://aryn.dev/