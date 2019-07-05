// express-mixin/src/main.js

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.disable('etag'); // TODO 2018-12-14 : Remove this, if possible.

// require('rootpath')(); // Or use the npm package app-root-path

module.exports = {
	// getApp: () => app,
	// getAppRootPath: () => require('app-root-path'), // ?
	createRouter: () => express.Router(),				// eslint-disable-line new-cap
	addRouter: (path, router) => app.use(path, router),
	// See https://expressjs.com/en/4x/api.html#express.static
	addStatic: staticPath => app.use(express.static(staticPath)),
	// The startServer function returns the server object.
	startServer: serverListenPort => {
		const defaultServerListenPort = 80;
		const server = app.listen(serverListenPort || defaultServerListenPort, () => {
			let host = server.address().address;

			if (host === '::') {
				host = 'localhost';
			}

			console.log('The Express.js server is listening at http://%s:%s (protocol %s)', host, server.address().port, server.address().family);
		});

		return server;
	}
};

// End of File.
