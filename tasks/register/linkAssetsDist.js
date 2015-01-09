module.exports = function (grunt) {
  grunt.registerTask('linkAssetsDist', [
    'sails-linker:distStyles',
    'sails-linker:distJs',
  ]);
};