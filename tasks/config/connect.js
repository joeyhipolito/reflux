/**
 * HTTP server for the project 
 *
 * ---------------------------------------------------------------
 *
 * Fires an http server for the project
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-connect
 */
module.exports = function(grunt) {

  grunt.config.set('connect', {
    options: {
      port: 1337,
      open: true,
      livereload: 35729,
      // change this to 0.0.0.0 to access server from outside
      hostname: 'localhost'
    },
    livereload: {
      options: {
        middleware: function (connect) {
          return [
            connect.static('.tmp')
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};
