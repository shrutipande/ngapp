define(['./index'], function (controllers) {
  'use strict';
  controllers.controller('productsCtrl', ['$scope', '$rootScope','craftsvillaService', function ($scope, $rootScope,craftsvillaService) {

    $scope.products = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var productsDetails = {
      "search":"saree",
      "color": ["red", "black"],
      "price": [{
        "500": "1000"
      }],
      "newestSort": "ASC",
      "pageId": "1"
    };

    var x = craftsvillaService.getProducts(productsDetails);
    console.log(x);

  }]);
});