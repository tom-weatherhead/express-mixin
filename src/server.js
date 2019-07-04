// express-mixin/src/server.js

'use strict';

// require('rootpath')();

const serverListenPort = 80;

const app = require('..');

// Start the server:

const server = app.listen(serverListenPort, () => {
	let host = server.address().address;

	if (host === '::') {
		host = 'localhost';
	}

	console.log('The Express.js server is listening at http://%s:%s (protocol %s)', host, server.address().port, server.address().family);
});

// End of File.
