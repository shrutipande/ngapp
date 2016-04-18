define(['./index'], function (controllers) {
	'use strict';
	controllers.controller('loginCtrl', ['$scope', '$state' ,'craftsvillaService', function ($scope, $state, craftsvillaService) {
	$scope.guestUser = false;
	$scope.forgotPasswd = false;
	$scope.sendPasswd= false;
$scope.userForgot ={};
$scope.userLogin={};
	$scope.changeGuest = function() {
		console.log("click on continue as guest");
		$scope.guestUser = true;
	};
	$scope.changeGuestCheckout = function() {
		console.log("click on  guest checkout");
		if ($scope.guestUserForm.$valid && $scope.userLogin.guestEmail) {
			console.log($scope.guest);
			var emailId = $scope.userLogin.guestEmail;
			craftsvillaService.continueAsGuest(emailId)
			.success(function (response) {
				console.log('GuestCheckout');
				console.log(response);
				$state.go('shipping');
			})
			.error(function (err) {
				console.log('error');
				throw new Error(err);
			})
		}
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
		$scope.forgotPasswd = true;
	};

	$scope.forgtPwdClose = function() {
		console.log("click on Forgot Password Close Button");
		$scope.forgotPasswd = false;
	};

		$scope.submitForm = function() {
					console.log($scope.userLoginForm);

			alert($scope.userForm.$valid)
			if ($scope.userForm.$valid) {
				console.log($scope.user);

			}
		};

	$scope.loginCred = function() {
		console.log($scope.userLoginForm);
		if ($scope.userLoginForm.$valid) {
			console.log($scope.userLogin);
			var emailId = $scope.userLogin.email;
			var password = $scope.userLogin.password;
			craftsvillaService.getLogin(emailId, password)
			.success(function (response) {
				console.log('test login');
				console.log(response);
				$state.go('shipping');
			})
			.error(function (err) {
				console.log('error');
				throw new Error(err);
			})
		}
	};
	$scope.sendPassword = function() {
		console.log("send paswword");
		console.log($scope.userForgot.forgotEmail);

		if ($scope.sendPasswordForm.$valid && $scope.userForgot.forgotEmail) {
			console.log($scope.userForgot);
			var emailId = $scope.userForgot.forgotEmail;
			craftsvillaService.forgotPassword(emailId)
			.success(function (response) {
				console.log('send password');
				console.log(response);
				console.log("click on Send Password");
				$scope.sendPasswd = true;
			})
			.error(function (err) {
				console.log('error');
				throw new Error(err);
			})
		}
	};
	$scope.initLogin = function() {
		console.log("Login Initialised");
	};
	$scope.initLogin();

	}]);
});
