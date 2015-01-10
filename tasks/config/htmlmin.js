/**
 * Compress HTML files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies html files and places them in the .tmp directory
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-htmlmin
 */
module.exports = function(grunt) {

  grunt.config.set('htmlmin', {
    dist: {
      options: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeCommentsFromCDATA: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        useShortDoctype: true
      },
      files: [{
        expand: true,
        cwd: './.tmp',
        src: ['**/*.html'],
        dest: './.tmp'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
};