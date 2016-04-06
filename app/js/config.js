/*global define */

define(['angular'], function (angular) {
  'use strict';

  return angular.module('app.config', [])
    .constant('VERSION', '0.0.1')
     .constant('HOST', 'http://localhost:8000/api')
    //.constant('HOST', 'https://staging.craftsvilla.com/api')
    //.constant('HOST', 'https://www.craftsvilla.com/api')
    .constant('ENVIRONMENT', 'development')
    .constant('$ionicLoadingConfig', {
      noBackdrop : true,
      hideOnStateChange : true,
      template: '<h6><ion-spinner icon="circles" class="spinner-energized"></ion-spinner></h6>'
    })
      .config(['$httpProvider', function ($httpProvider) {
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
        //$httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
        //$httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        //$httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';
        //$httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
        //$httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
        //$httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
        //$httpProvider.defaults.useXDomain = true;
      }])
});
