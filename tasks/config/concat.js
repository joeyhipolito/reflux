/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/concat directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(grunt) {

  grunt.config.set('concat', {
    // js: {
    //   src: require('../pipeline').jsFilesToInject,
    //   dest: '.tmp/tidy/scripts.min.js'
    // },
    css: {
      src: require('../pipeline').cssFilesToInject,
      dest: '.tmp/tidy/styles.min.css'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};
