define(['./index'], function (controllers) {
	'use strict';
	controllers.controller('loginCtrl', ['$scope', 'craftsvillaService', function ($scope, craftsvillaService) {

		$scope.guestUser = false;

		$scope.changeGuest = function() {
			console.log("click on continue as guest");
			$scope.guestUser = true;
		};
		$scope.changeLogin = function() {
			console.log("click on login");
		};
		$scope.changeGuestCheckout = function() {
			console.log("click on guest checkout");
		};
		$scope.signupFB = function() {
			console.log("sign up FB");
		};
		$scope.signupGgle = function() {
			console.log("sign up Google");
		};
		$scope.loginHere = function() {
			console.log("click on Login Here");
			$scope.guestUser = false;
		};
		$scope.forgotPwd = function() {
			console.log("click on Forgot Password");
		};

	}]);
});
