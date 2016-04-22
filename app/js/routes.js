/**
 * Defines the main routes in the application.
 */
define(['./app'], function (app) {
  'use strict';
  app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(false);

    $stateProvider
        .state('login', {
          url: "/login",
          templateUrl: 'partials/login.html',
          controller: 'loginCtrl',
          title: 'Login',
          authenticate: false
        })
        .state('shipping', {
          url: "/shipping",
          templateUrl: 'partials/shipping.html',
          controller: 'shippingCtrl',
          title: 'Shipping',
          authenticate: true
        })
        .state('payment', {
          url: "/payment/:platform/:quoteId",
          templateUrl: 'partials/payment.html',
          controller: 'paymentCtrl',
          title: 'Payment',
          authenticate: false
        })
        .state('payments-error', {
          url: "/payment-error",
          templateUrl: 'partials/payment-error.html',
          controller: 'paymentErrorCtrl',
          title: 'Error',
          authenticate: false
        })
        .state('payments-success', {
          url: "/payment-success",
          templateUrl: 'partials/payment-success.html',
          controller: 'paymentSuccessCtrl',
          title: 'Success',
          authenticate: false
        })
        .state('cart', {
          url: "/cart",
          templateUrl: 'partials/checkout-cart.html',
          controller: 'checkoutCartCtrl',
          title: 'Shopping Cart',
          authenticate: false
        })
        .state('empty-cart', {
          url: "/empty-cart",
          templateUrl: 'partials/empty-cart.html',
          controller: 'emptyCartCtrl',
          title: 'Empty cart',
          authenticate: false
        });
    $urlRouterProvider.otherwise("/cart");
  }]);
});
