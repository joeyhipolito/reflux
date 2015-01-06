/**
 * Manage Bower modules
 *
 * ---------------------------------------------------------------
 *
 * This grunt task manages bower dependencies nicely
 *
 * For usage docs see:
 *    https://github.com/curist/grunt-bower
 */
module.exports = function(grunt) {

  grunt.config.set('bower', {
    dev: {
      dest: '.tmp',
      js_dest: '.tmp/vendors/scripts',
      css_dest: '.tmp/vendors/styles'
    }
  });

  grunt.loadNpmTasks('grunt-bower');
};
