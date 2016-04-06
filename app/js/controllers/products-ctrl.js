define(['./index'], function (controllers) {
	'use strict';
	controllers.controller('productsCtrl', ['$scope', '$rootScope', 'craftsvillaService', function ($scope, $rootScope, craftsvillaService) {

		//$scope.products = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		//console.log("i");
		var productsDetails = {
			"search": "saree",
			"color": ["red", "black"],
			"price": [{
				"500": "1000"
			}],
			"newestSort": "ASC",

			"pageId": "1"
		};
		craftsvillaService.getProducts(productsDetails)
			.then(function (data) {
				$scope.products = data.data.data;
			});
	}]);
});