/**
 * Defines the main routes in the application.
 */
define(['./app'], function (app) {
  'use strict';
  app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider
        .state('login', {
          url: "/login",
          templateUrl: 'partials/login.html',
          controller: 'loginCtrl',
          title: 'login'
        })
        .state('shipping', {
          url: "/shipping",
          templateUrl: 'partials/shipping.html',
          controller: 'shippingCtrl',
          title: 'shipping'
        })
        .state('payment', {
          url: "/payment",
          templateUrl: 'partials/payment.html',
          controller: 'paymentCtrl',
          title: 'payments'
        })
        .state('payments-error', {
          url: "/payment-error",
          templateUrl: 'partials/payment-error.html',
          controller: 'paymentErrorCtrl',
          title: 'payments-error'
        })
        .state('payments-success', {
          url: "/payment-success",
          templateUrl: 'partials/payment-success.html',
          controller: 'paymentSuccessCtrl',
          title: 'payments-success'
        })
        .state('checkout', {
          url: "/checkout",
          templateUrl: 'partials/checkout-cart.html',
          controller: 'checkoutCartCtrl',
          title: 'checkout'
        })
        .state('empty-cart', {
          url: "/empty-cart",
          templateUrl: 'partials/empty-cart.html',
          controller: 'emptyCartCtrl',
          title: 'Empty cart'
        });
    $urlRouterProvider.otherwise("/login");

  }]);
});