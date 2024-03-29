// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-05-08 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/Chart.js/Chart.js',
      'bower_components/angular-chart.js/dist/angular-chart.js',
      'bower_components/datatables/media/js/jquery.dataTables.js',
      'bower_components/flot/jquery.flot.js',
      'bower_components/holderjs/holder.js',
      'bower_components/metisMenu/dist/metisMenu.js',
      'bower_components/raphael/raphael.js',
      'bower_components/mocha/mocha.js',
      'bower_components/morrisjs/morris.js',
      'bower_components/datatables-responsive/js/dataTables.responsive.js',
      'bower_components/flot.tooltip/js/jquery.flot.tooltip.js',
      'bower_components/startbootstrap-sb-admin-2/dist/js/sb-admin-2.js',
      'bower_components/d3/d3.js',
      'bower_components/c3/c3.js',
      'bower_components/angular-chart/angular-chart.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
