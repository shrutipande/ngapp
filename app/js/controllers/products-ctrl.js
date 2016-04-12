define(['./index'], function (controllers) {
	'use strict';
	controllers.controller('productsCtrl', ['$scope', '$rootScope', 'craftsvillaService', function ($scope, $rootScope, craftsvillaService) {

		craftsvillaService.getProducts()
			.success(function (response) {
        console.log(response);
				$scope.products = response.data.data;
        console.log( + $scope.products)
			})
			.error(function (err) {
				throw new Error(err);
			})
	}]);
});