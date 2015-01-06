/**
 * A grunt task to keep directories in sync. It is very similar to grunt-contrib-copy
 * but tries to copy only those files that has actually changed.
 *
 * ---------------------------------------------------------------
 *
 * Synchronize files from the `app` folder to `.tmp`,
 * smashing anything that's already there.
 *
 * For usage docs see:
 *    https://github.com/tomusdrw/grunt-sync
 *
 */
module.exports = function(grunt) {

  grunt.config.set('sync', {
    dev: {
      files: [{
        cwd: './app',
        src: ['**/*.!(coffee|scss)'],
        dest: '.tmp'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-sync');
};
