// This file isn't transpiled, so must use CommonJS and ES5.

// Register bable to transpile before tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function () { };
