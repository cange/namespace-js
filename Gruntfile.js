module.exports = function(grunt) {
  'use strict';

  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    watch: {
      options: {
        spawn: false
      },
      js: {
        files: ['Gruntfile.js', 'lib/*.js', 'spec/*.js'],
        tasks: ['test']
      }
    },

    jasmine: {
      all: {
        src: 'lib/*.js',
        options: {
          specs: 'spec/*_spec.js',
          helpers: 'spec/*_helper.js'
        }
      }
    }

  });

  grunt.registerTask('test', ['jasmine']);
}
