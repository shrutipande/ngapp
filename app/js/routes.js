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
          title: 'login',
          authenticate: false
        })
        .state('shipping', {
          url: "/shipping",
          templateUrl: 'partials/shipping.html',
          controller: 'shippingCtrl',
          title: 'shipping',
          authenticate: true
        })
        .state('payment', {
          url: "/payment/:platform/:quoteId",
          templateUrl: 'partials/payment.html',
          controller: 'paymentCtrl',
          title: 'payments',
          authenticate: true
        })
        .state('payments-error', {
          url: "/payment-error",
          templateUrl: 'partials/payment-error.html',
          controller: 'paymentErrorCtrl',
          title: 'payments-error',
          authenticate: true
        })
        .state('payments-success', {
          url: "/payment-success",
          templateUrl: 'partials/payment-success.html',
          controller: 'paymentSuccessCtrl',
          title: 'payments-success',
          authenticate: true
        })
        .state('cart', {
          url: "/cart",
          templateUrl: 'partials/checkout-cart.html',
          controller: 'checkoutCartCtrl',
          title: 'checkout',
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
