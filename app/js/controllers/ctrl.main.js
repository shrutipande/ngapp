define(['./index'], function (controllers) {
 	controllers.controller('ctrl.main', [
		'$scope',
		'$rootScope',
		'$window',
		'$timeout',
		'ENVIRONMENT',

		'LSTATIC_DEV',
		'LSTATIC_PROD',

		'IMGHOST_DEV',
		'IMGHOST_PROD',

		'VIEWS',

		function ($scope, $rootScope, $window, $timeout, ENVIRONMENT, LSTATIC_DEV, LSTATIC_PROD, IMGHOST_DEV, IMGHOST_PROD, VIEWS) {
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

			$rootScope.goBack = function () {
					$timeout(function () {
							$window.history.back();
					}, 1000);
      }

      $rootScope.scrollToTop = function () {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
		}]);
});
