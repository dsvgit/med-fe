var initSettings = require('./index');

var argv = require('optimist').argv;
var type = argv.type;

initSettings(type);
