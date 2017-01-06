var relPath = require('../utils/relPath');

module.exports.TEMPLATE_PATH = relPath('settings/settings/settings.template.js', 'buildSettings');
module.exports.DIST_PATH = relPath('config.js', 'build');
