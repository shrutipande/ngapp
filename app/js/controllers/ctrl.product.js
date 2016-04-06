define(['./index'], function (controllers) {
	'use strict';
	controllers.controller('ctrl.product', [

		'$scope',
		'craftsvillaService',
		'$rootScope',

		function ($scope, $rootScope, craftsvillaService) {

			//Scope Variables
			angular.extend($scope, {

			});

			//Scope methods
			angular.extend($scope, {
				init: function () {
					console.log("Loaded....");
				}
			});

			$scope.init();

		}]);
});