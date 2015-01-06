/**
 * Compile CoffeeScript files to JavaScript.
 *
 * ---------------------------------------------------------------
 *
 * Compiles coffeeScript files from `app/scripts` into Javascript and places them into
 * `.tmp/scripts` directory.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-coffee
 */
module.exports = function(grunt) {

  grunt.config.set('coffee', {
    dev: {
      options: {
        bare: true,
        sourceMap: true,
        sourceRoot: './'
      },
      files: [{
        expand: true,
        cwd: 'app/scripts',
        src: ['**/*.coffee'],
        dest: '.tmp/scripts',
        ext: '.js'
      }, {
        expand: true,
        cwd: 'app/scripts',
        src: ['**/*.coffee'],
        dest: '.tmp/scripts',
        ext: '.js'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
};
