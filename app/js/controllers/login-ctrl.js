define(['./index'], function (controllers) {
	'use strict';
	controllers.controller('loginCtrl', ['$scope', '$state' ,'craftsvillaService', function ($scope, $state, craftsvillaService) {
	$scope.guestUser = false;
	$scope.forgotPasswd = false;
	$scope.sendPasswd= false;
	$scope.invalidCred=false;
	$scope.userForgot ={};
	$scope.userLogin={};
	$scope.changeGuest = function() {
		console.log("click on continue as guest");
		$scope.guestUser = true;
	};
	$scope.changeGuestCheckout = function() {
		if ($scope.guestUserForm.$valid ) {
			var emailId = $scope.guest.guestUserEmail;
			craftsvillaService.continueAsGuest(emailId)
			.success(function (response) {
				if(response.s==0 )
				{
					alert("Invalid email ID or Password!");
				}
				else{
				$state.go('shipping');
				}
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
		$scope.guestUser = false;
	};
	$scope.forgotPwd = function() {
		$scope.forgotPasswd = true;
	};

	$scope.forgtPwdClose = function() {
		$scope.forgotPasswd = false;
	};

	$scope.loginCred = function() {
		if ($scope.userLoginForm.$valid) {
			var emailId = $scope.userLogin.email;
			var password = $scope.userLogin.password;
			craftsvillaService.getLogin(emailId, password)
			.success(function (response) {
				if(response.s==0 )
				{
						$scope.invalidCred=true;
				}
				else{
					$state.go('shipping');
				}
			})
			.error(function (err) {
				console.log('error');
				throw new Error(err);
			})
		}
	};
	$scope.sendPassword = function() {

		if ($scope.sendPasswordForm.$valid ) {
			var emailId = $scope.userForgot.forgotEmail;
			craftsvillaService.forgotPassword(emailId)
			.success(function (response) {
				$scope.sendPasswd=true;
				$scope.forgotPasswd = false;

			})
			.error(function (err) {
				console.log('error');
				throw new Error(err);
			})
		}
	};
	$scope.sendPwdClose = function() {
			$scope.sendPasswd = false;
	};
	$scope.initLogin = function() {
		console.log("Login Initialised");
	};
	$scope.initLogin();

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
