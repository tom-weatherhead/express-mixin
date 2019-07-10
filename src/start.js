// express-mixin/src/start.js

'use strict';

/*
// If your Express server project contains ES2015+ code, install babel-mixin as a non-dev dependency,
// uncomment this block, and move the 'expressMixin' code at the bottom into a file named server.js

require('babel-mixin')({
	includeRegeneratorRuntime: true
});

// Import the rest of your application from e.g. ./server.js :
require('./server');
 */

const expressMixin = require('..');

// console.log('App root is', expressMixin.getAppRootPath());

expressMixin.addStatic('static');
expressMixin.startServer(80);
