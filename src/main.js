// express-mixin/src/main.js

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());	// We intend to receive JSON requests.
app.use(cors());

// app.disable('etag'); // TODO 2018-12-14 : Remove this, if possible. Removing it may cause problems e.g. in Docker apps or from iOS clients.

module.exports = {
	getAppRootPath: () => require('app-root-path').path, // ? Or require('rootpath')(); ?
	// See https://expressjs.com/en/4x/api.html#express.static
	addStatic: staticPath => app.use(express.static(staticPath)),
	createAndUseRouter: (path, fnInitRouter) => {
		const router = express.Router();				// eslint-disable-line new-cap

		fnInitRouter(router);
		app.use(path, router);
	},
	startServer: (serverListenPort, serverName, fnOnInit) => {

		if (fnOnInit) {
			fnOnInit();
		}

		const defaultServerListenPort = 80;
		const server = app.listen(serverListenPort || defaultServerListenPort, () => {
			let host = server.address().address;

			if (host === '::') {
				host = 'localhost';
			}

			console.log('The %s is listening at http://%s:%s (protocol %s)', serverName || 'Express.js server', host, server.address().port, server.address().family);
		});

		return server;
	}
};

// End of File.
