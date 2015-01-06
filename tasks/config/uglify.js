/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `app`.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

  grunt.config.set('uglify', {
    dist: {
      src: ['.tmp/tidy/scripts.min.js'],
      dest: '.tmp/tidy/scripts.min.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};