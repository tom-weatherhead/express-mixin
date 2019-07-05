// express-mixin/src/start.js

'use strict';

/*
require('babel-mixin')({
	includeRegeneratorRuntime: true
});

// Import the rest of our application.
require('./server');
 */

const expressMixin = require('..');

expressMixin.addStatic('static');
expressMixin.startServer(80);
