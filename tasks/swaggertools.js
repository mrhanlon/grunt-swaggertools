/*
 * grunt-swaggertools
 * https://github.com/mrhanlon/grunt-swaggertools
 *
 * Copyright (c) 2015 Matthew R Hanlon
 * Licensed under the MIT license.
 */

'use strict';

var tools = require('swagger-tools');

module.exports = function(grunt) {

  function validate(specFile, options, done) {
    if (! grunt.file.exists(specFile)) {
      return false;
    }

    var rLOrSO = JSON.parse(grunt.file.read(specFile));

    tools.specs[options.version].validate(rLOrSO, function(error, validationResult) {
      if (error) {
        grunt.log.error(error);
        done(false);
      }

      if (typeof validationResult === 'undefined') {
        grunt.log.ok('The Swagger specification', specFile, 'is a valid Swagger', options.version, 'Specification.');
        done();
      } else {

        if (validationResult.warnings.length > 0) {
          validationResult.warnings.forEach(function(warning) {
            grunt.log.writeln(warning.code, warning.message, 'at', warning.path.join('.'));
          });
        }

        if (validationResult.errors.length > 0) {
          validationResult.errors.forEach(function(error) {
            grunt.log.error(error.code, error.message, 'at', error.path.join('.'));
          });
          done(false);
        } else {
          done();
        }
      }
    });
  }

  grunt.registerMultiTask('swaggertools', 'Grunt plugin for Swagger API tooling', function() {

    var name = this.name || 'swaggertools';

    this.requiresConfig([name, this.target, 'specFile']);

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      version: 'v2'
    });

    // async!
    var done = this.async();

    var specFile = grunt.config([name, this.target, 'specFile']);

    // validate
    validate(specFile, options, done);
  });

};
