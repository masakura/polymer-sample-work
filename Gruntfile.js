module.exports = function (grunt) {
  'use strcit';

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  var options = {
    paths: {
      app: 'app',
      dist: 'dist'
    }
  };

  var configs = require('load-grunt-configs')(grunt, options);
};
