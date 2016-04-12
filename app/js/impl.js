/**
 * This is where you add new components to the application.
 * you don't need to worry about the dependency order (that's what RequireJS is for).
 */
define([
    './templates',
    './controllers/checkout-cart-ctrl',
    './controllers/empty-cart-ctrl',
    './controllers/login-ctrl',
    './controllers/payment-ctrl',
    './controllers/payment-error-ctrl',
  './controllers/payment-success-ctrl',
  './controllers/shipping-ctrl',
     './directives/craftsvilla-directive',
    './services/craftsvilla-service',
    './filters/craftsvilla-filter',
    './animations/craftsvilla-animation'
], function () {});