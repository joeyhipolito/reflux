module.exports = function (grunt) {
  grunt.registerTask('default', [
    'compile',
    'linkAssets',
    'connect:livereload',
    'watch'
  ]);
};