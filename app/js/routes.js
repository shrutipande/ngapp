/**
 * Defines the main routes in the application.
 */
define(['./app'], function (app) {
  'use strict';
  app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('products', {
          url: '/products',
          templateUrl: 'partials/products.html',
          controller: 'productsCtrl',
          title: 'Home'
        })
		    .state('productById', {
			    url: '/products/:id',
			    templateUrl: 'partials/product.html',
			    controller: 'ctrl.product',
			    title: 'Product Display'
		    })
        .state('cart', {
          url: "/cart",
          templateUrl: 'partials/cart.html',
          controller: 'cartCtrl',
          title: 'Cart'
        });

    $urlRouterProvider.otherwise("/products");

  }]);
});