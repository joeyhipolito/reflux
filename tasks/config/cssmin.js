/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/min directory.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function(grunt) {

  grunt.config.set('cssmin', {
    dist: {
      src: ['.tmp/tidy/styles.min.css'],
      dest: '.tmp/tidy/styles.min.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
};
