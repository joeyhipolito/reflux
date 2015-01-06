/**
 * Compiles SASS | SCSS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `app/styles/main.scss` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-sass
 */
module.exports = function(grunt) {

  grunt.config.set('sass', {
    dev: {
      files: [{
        expand: true,
        cwd: 'app/styles/',
        src: ['main.scss'],
        dest: '.tmp/styles/',
        ext: '.css'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
};