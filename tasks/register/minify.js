module.exports = function (grunt) {
  grunt.registerTask('minify', [
    'concat',
    'uglify',
    'uncss',
    'cssmin'
  ]);
};