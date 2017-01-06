'use strict';

var path = require('path');

var homeDir = process.cwd();

var paths = {
  'home': '/src',
  'admin': '/src/admin',
  'client': '/src/client',
  'buildSettings': '/src/buildSettings',
  'build': '/build'
};

// by default return path to UI project
function relPath(p, dir) {
  var root = arguments.length == 2 ? path.join(homeDir, paths[dir]) : path.join(homeDir, '');

  var rp = (function (currentRoot) {
    return function(currentPath) {
      return path.join(currentRoot, currentPath)
    }
  })(root);

  if (Array.isArray(p)) return p.map(function(v) { return rp(v); });
  return rp(p);
}

module.exports = relPath;
