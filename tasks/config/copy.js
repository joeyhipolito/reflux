/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and sass files, from the 
 * app folder into the .tmp directory.
 *
 * # build task config
 * Copies all directories and files from the .tmp directory into a www directory.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [{
        expand: true,
        cwd: './app',
        src: ['**/*.!(coffee|scss)'],
        dest: '.tmp'
      }]
    },
    dist: {
      files: [
        {
          expand: true,
          cwd: '.tmp',
          src: ['**/*'],
          dest: 'dist'
        }        
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
