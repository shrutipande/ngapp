define(['./index'], function (controllers) {
	'use strict';
	controllers.controller('ctrl.main', [
		'$scope',
		'$rootScope',
		'ENVIRONMENT',

		'LSTATIC_DEV',
		'LSTATIC_PROD',

		'IMGHOST_DEV',
		'IMGHOST_PROD',

		'VIEWS',

		function ($scope, $rootScope, ENVIRONMENT, LSTATIC_DEV, LSTATIC_PROD, IMGHOST_DEV, IMGHOST_PROD, VIEWS) {
			$rootScope.ENVIRONMENT = ENVIRONMENT;

			if($rootScope.ENVIRONMENT === 'development') {
				$rootScope.LSTATIC = LSTATIC_DEV;
				$rootScope.IMGHOST = IMGHOST_DEV;
			}
			else {
				$rootScope.LSTATIC = LSTATIC_PROD;
				$rootScope.IMGHOST = IMGHOST_PROD;
			}

			$rootScope.VIEWS = VIEWS;

			$rootScope.getScript = function (host, path) {
				return host + path;
			}
		}]);
});
