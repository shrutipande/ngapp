define([
  'angular',
  'angular-sanitize',
  'angular-ui-router',
  'angular-credit-cards',
  'ngstorage',
  'angular-cookies',
  'config',
  './controllers/index',
  './directives/index',
  './filters/index',
  './services/index',
  './animations/index',
  'satellizer',
    'angular-animate'
], function (ng) {

  return ng.module('app', [
    'app.config',
    'app.services',
    'app.controllers',
    'app.filters',
    'app.directives',
    'app.animations',
    'ngSanitize',
    'ui.router',
    'credit-cards',
    'satellizer',
    'ngAnimate',
    'ngStorage',
    'ngCookies'
  ]);
});
