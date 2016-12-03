var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'project02'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/project02-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'project02'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/project02-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'project02'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/project02-production'
  }
};

module.exports = config[env];
