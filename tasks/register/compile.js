module.exports = function (grunt) {
  grunt.registerTask('compile', [
    'clean:dev',
    'bower:dev',
    'sass:dev',
    'coffee:dev',
    'copy:dev',
    'browserify'
  ]);
};