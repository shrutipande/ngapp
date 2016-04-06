/**
 * Defines the main routes in the application.
 */
define(['./app'], function (app) {
  'use strict';
  app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('index', {
          url: '/',
          templateUrl: 'partials/products.html',
          controller: 'productsCtrl',
          title: 'Home'
        })
        .state('cart', {
          url: "/cart",
          templateUrl: 'partials/cart.html',
          controller: 'cartCtrl',
          title: 'Cart'
        });

    $urlRouterProvider.otherwise("/");

  }]);
});