/*global define */

define(['angular'], function (angular) {
  'use strict';

  return angular.module('app.config', [])
      .constant('VERSION', '0.0.1')
      //.constant('HOST', 'http://localhost:8000/api')
      .constant('HOST', 'https://api.myjson.com/bins/')
      //.constant('HOST', 'https://www.craftsvilla.com/api')
      .constant('ENVIRONMENT', 'development')
      .config(['$httpProvider', function ($httpProvider) {
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];
        //$httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
        //$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        //$httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';
        //$httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
        //$httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
        //$httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
        //$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        //$httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
      }])
});
