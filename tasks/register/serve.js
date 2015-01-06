module.exports = function (grunt) {
  grunt.registerTask('serve', [
    'compile',
    'linkAssets',
    'connect:livereload',
    'watch'
  ]);
};