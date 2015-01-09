module.exports = function (grunt) {
  grunt.registerTask('dist', [
    'compile',
    'minify',
    'sails-linker:distStyles',
    'sails-linker:distJs',
    'clean:dist',
    'copy:dist'
  ]);
};