+function() {
  var config = {
    'ApiHost': '%app.ApiHost%',
    'ClientId': '%app.ClientId%',
    'ClientSecret': '%app.ClientSecret%'
  };

  if (window) window.CirrusFrontendGlobalConfig = config;

  module.exports = config;
}();
