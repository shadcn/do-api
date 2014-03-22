// Dependencies.
var scrapdo = require('scrapdo');

// Returns a single user, specified by the username parameter.
exports.get = function(username, callback) {
  // Get the uid first.
  scrapdo.getUserData('uid', { username: username }, function(data) {
    if (parseInt(data) > 0) {
      scrapdo.getUserData('info', { uid: data }, function(data) {
        callback(data);
      });
    }
    else {
      callback(404);
    }
  });
}

// Returns projects for a user, specified by the username parameter.
exports.getProjects = function(username, callback) {
  // Get the uid first.
  scrapdo.getUserData('uid', { username: username }, function(data) {
    if (parseInt(data) > 0) {
      scrapdo.getUserData('projects', { uid: data }, function(data) {
        callback(data);
      });
    }
    else {
      callback(404);
    }
  });
}
