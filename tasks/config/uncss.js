/**
 * Remove unused CSS from your projects.
 *
 * ---------------------------------------------------------------
 *
 * Uncss css files and places them into .tmp/clean directory.
 *
 * For usage docs see:
 *    https://github.com/addyosmani/grunt-uncss
 */
module.exports = function(grunt) {

  grunt.config.set('uncss', {
    dist: {
      options: {
        stylesheets: ['../.tmp/tidy/styles.min.css']
      },
      files: {
        '.tmp/tidy/styles.min.css': ['app/index.html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-uncss');
};