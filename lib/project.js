// Dependencies.
var scrapdo = require('scrapdo');

// Returns a single project, specified by the name parameter.
exports.get = function(name, callback) {
  scrapdo.getProjectData('info', { name: name }, function(data) {
    callback(data);
  });
}
