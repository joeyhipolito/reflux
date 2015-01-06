/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `app` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

  grunt.config.set('watch', {
    app: {
      // Assets to watch:
      files: ['app/**/*', 'tasks/pipeline.js'],
      // When assets are changed:
      tasks: ['syncAssets' , 'linkAssets', 'browserify']
    },
    livereload: {
      options: {
        livereload: 35729
      },
      files: [
        'app/**/*.html',
        '.tmp/styles/**/*.css',
        '.tmp/scripts/**/*.js',
        '.tmp/images/**/*'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
