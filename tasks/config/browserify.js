/**
 * Browserify files with React as an option.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task allows `require`'ing of modules in the front-end, passing react as an option
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-browserify
 */

module.exports = function(grunt) {

  grunt.config.set('browserify', {
    js: {
      src : require('../pipeline').jsFilesToInject,
      dest: '.tmp/tidy/scripts.min.js'
    },
    options: {
      debug: true,
      transform: ['reactify']
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
};