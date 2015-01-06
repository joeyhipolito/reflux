/**
 * Autoprefixer task.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task to autoprefix vendor sensitive css
 *
 * For usage docs see:
 *    https://github.com/nDmitry/grunt-autoprefixer
 */
module.exports = function(grunt) {

  grunt.config.set('autoprefixer', {
    options: {
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
    },
    dist: {
      files: [{
        expand: true,
        cwd: '.tmp/tidy/',
        src: '**/*.css',
        dest: '.tmp/tidy/'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
};
