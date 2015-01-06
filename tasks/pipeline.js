/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */

// CSS files to inject in order
//
// (if you're using SASS with the built-in default config, you'll want
//  to change `app/styles/main.scss` instead.)
var cssFilesToInject = [
  'styles/**/*.css'
];

// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [
  
  // Dependencies like jQuery, or Angular are brought in here
  'scripts/vendors/scripts/react.js',
  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'scripts/**/*.js'
];

module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/' + path;
});
