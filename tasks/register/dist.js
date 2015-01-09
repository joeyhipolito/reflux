module.exports = function (grunt) {
  grunt.registerTask('dist', [
    'compile',
    'minify',
    'linkAssetsDist',
    'htmlmin',
    'clean:dist',
    'copy:dist'
  ]);
};