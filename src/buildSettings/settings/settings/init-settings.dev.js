var fs = require('fs');
var path = require('path');
var forOwn = require('lodash').forOwn;
var TEMPLATE_PATH = require('../constants').TEMPLATE_PATH;
var DIST_PATH = require('../constants').DIST_PATH;

var defaultConfig = {
  '%app.ApiHost%': 'http://localhost:8000',
  '%app.ClientId%': '',
  '%app.ClientSecret%': ''
};

function init() {
  console.log('START init config');
  try {
    // when config file already exists -> do nothing, else -> create new one in catch block.
    fs.accessSync(DIST_PATH);
    console.log('Config file "' + DIST_PATH + '" exists and will be used.');
  } catch (e) {
    console.log('Config file "' + DIST_PATH + '" does NOT exists and will be created.')
    fs.readFile(TEMPLATE_PATH, 'utf-8', function (err, data) { // copy file and set default configs
      forOwn(defaultConfig, function (value, key) {
        data = data.replace(key, value);
      });
      fs.writeFile(DIST_PATH, data);
    });
  }
}

module.exports.init = init;
