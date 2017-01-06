var fs = require('fs');
var TEMPLATE_PATH = require('../constants').TEMPLATE_PATH;
var DIST_PATH = require('../constants').DIST_PATH;

function init() {
  fs.createReadStream(TEMPLATE_PATH).pipe(fs.createWriteStream(DIST_PATH)); // copy file
}

module.exports.init = init;
