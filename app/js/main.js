/*
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({
  "waitSeconds" : 200,
  paths: {
        'domReady': '../bower_components/requirejs-domready/domReady',
        'angular': '../bower_components/angular/angular.min',
        'angular-sanitize' : '../bower_components/angular-sanitize/angular-sanitize.min',
        'angular-ui-router' : '../bower_components/angular-ui-router/release/angular-ui-router.min',
        'angular-credit-cards' : '../bower_components/angular-credit-cards/release/angular-credit-cards',
      'angular-cookies' : '../bower_components/angular-cookies/angular-cookies.min',
      'satellizer' : '../bower_components/satellizer/satellizer',
        'ngstorage' : '../bower_components/ngstorage/ngStorage.min'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'satellizer': {
            dep: ['angular']
        },
        'angular-cookies': {
            deps: ['angular']
        },
        'ngstorage': {
            deps: ['angular']
        }
    }
});

require(['./bootstrap'], function () {
    //nothing to do here...see bootstrap.js
});
