// Dependencies
var express = require('express');
var app = express();

// Resources.
var project = require('./lib/project');
var user = require('./lib/user');

// Get a project by name parameter.
app.get('/api/project/:name', function(req, res) {
  var name = req.param('name');

  // 400 if name not specified.
  if (!name) {
    res.send('Missing parameter name.', 400);
  }

  project.get(name, function(data) {
    // 404 if not project found.
    if (data == '404') {
      res.send('Project not found.', 404);
    }

    res.json(data);
  });
});

// Get a user by username parameter.
app.get('/api/user/:username', function(req, res) {
  var username = req.param('username');

  user.get(username, function(data) {
    // 404 if not user not found.
    if (data == '404') {
      res.send('User not found', 404);
    }

    res.json(data);
  });
});

// Get a user's projects by username parameter.
app.get('/api/user/projects/:username', function(req, res) {
  var username = req.param('username');

  user.getProjects(username, function(data) {
    // 404 if not user not found.
    if (data == '404') {
      res.send('User not found', 404);
    }

    res.json(data);
  });
});

app.listen(3000);
