define(['./index'], function (controllers) {
	'use strict';
	controllers.controller('ctrl.product', [

		'$scope',
		'$stateParams',
		'craftsvillaService',

		function ($scope, $stateParams, craftsvillaService) {

			//Scope Variables
			angular.extend($scope, {
				activeImageIndex: 0
			});

			//Scope methods
			angular.extend($scope, {
				showPdpImage: function (index) {
					$scope.activeImageIndex = index;
				},
				getProduct: function (id) {
					craftsvillaService.getProductById(id)
						.then(function (data) {
							$scope.product = data;
							$scope.product.images = $scope.product.gallery_images.split(",");
						})
						.catch(function (err) {
							throw new Error(err);
						})
				},
				init: function () {
					$scope.getProduct($stateParams.id);
				}
			});

			$scope.init();

		}]);
});