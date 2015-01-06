/**
* Gruntfile
* 
* This Node script is executed when you runt `grunt`
* It's purpose is to load Grunt tasks in your project's `tasks`
* directory and allow you to add and remove tasks as you see fit.
* 
* WARNING:
* Unless you know what you're doing, you shouldn't change this file.
* Check out the `tasks` directory instead.
*/

module.exports = function (grunt) {
  
  /**
  * Load the include-all module in order to require all of our grunt
  * configurations and task registrations dynamically (tasks/[config|register])
  */

  var includeAll;
  try {
    includeAll = require('include-all');
  } catch (e0) {
    try {
      includeAll = require('sails/node_modules/include-all');
    }
    catch(e1) {
      console.error('Could not find `include-all` module.');
      console.error('Skipping grunt tasks...');
      console.error('To fix this, please run:');
      console.error('npm install include-all --save`');
      console.error();

      grunt.registerTask('default', []);
      return;
    }
  }

  /**
  * Loads Grunt configuration modules from the specified
  * relative path. These modules should export a function
  * that, when run, should either load/configure or register
  * a Grunt task
  */

  function loadTasks (path) {
    return includeAll({
      dirname: require('path').resolve(__dirname, path),
      filter: /(.+)\.js$/
    }) || {};
  }

  function invokeConfigFn (tasks) {
    for (var taskName in tasks) {
      if (tasks.hasOwnProperty(taskName)) {
        tasks[taskName](grunt);
      }
    }
  }


  // Load tasks functions
  var configurations      = loadTasks('./tasks/config'),
      registerDefinitions = loadTasks('./tasks/register');

  // ensure that a default tasks exists
  if (!registerDefinitions.default) {
    registerDefinitions.default = function (grunt) {
      grunt.registerTask('default', [])
    }
  }

  // Run task functions to configure Grunt.
  invokeConfigFn(configurations);
  invokeConfigFn(registerDefinitions);

}