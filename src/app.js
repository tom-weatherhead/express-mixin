// express-mixin/src/app.js

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.disable('etag'); // TODO 2018-12-14 : Remove this, if possible. See if removing it breaks the loading of the Dashboard on iOS.

// See https://expressjs.com/en/4x/api.html#express.static
// app.use(express.static('public'));
app.use(express.static('static'));

/*
pathsToRoutersList.forEach(element => {

	if (element.path && element.router) {
		app.use(element.path, element.router);
	}
});
 */

module.exports = app;

// End of File.
