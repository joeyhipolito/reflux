module.exports = function (grunt) {
  grunt.registerTask('dist', [
    'compile',
    'minify',
    'autoprefixer',
    'sails-linker:distStyles',
    'sails-linker:distJs',
    'clean:dist',
    'copy:dist'
  ]);
};