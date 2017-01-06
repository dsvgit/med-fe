var get = require('lodash').get;
var devConfig = require('./settings/init-settings.dev');
var releaseConfig = require('./settings/init-settings.release');
var defaultConfig = devConfig;

var configs = {
  dev: devConfig,
  release: releaseConfig
};

module.exports = function(type) {
  var config = get(configs, type, defaultConfig);
  config.init();
};
