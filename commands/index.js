module.exports = {
    status: require('./status.js'),
    help: require('./help.js'),
    echo: require('./echo.js'),
    ping: require('./ping.js'),
    params: require('./paramexample.js'),
};
// command files need to be listed here as seen above. otherwise they will not load.
// the files and keys here don't necessarily need to be the same name as the command, nor the same name as each other, but for sanity's sake I recommend it.