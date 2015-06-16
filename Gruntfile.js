/*
 * grunt-swaggertools
 * https://github.com/mrhanlon/grunt-swaggertools
 *
 * Copyright (c) 2015 Matthew R Hanlon
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    swaggertools: {
      petstore: {
        specFile: 'test/fixtures/petstore.json'
      },
      petstore_expanded: {
        specFile: 'test/fixtures/petstore_expanded.json'
      },
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['jshint', 'swaggertools']);
  grunt.registerTask('default', ['test']);
};
