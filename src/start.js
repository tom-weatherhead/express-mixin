// express-mixin/src/start.js

'use strict';

require('babel-mixin')({
	includeRegeneratorRuntime: true
});

// Import the rest of our application.
require('./server');
