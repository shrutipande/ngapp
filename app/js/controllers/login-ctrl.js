define(['./index'], function (controllers) {
	'use strict';
	controllers.controller('loginCtrl', ['$scope', '$state', '$auth', '$localStorage', 'craftsvillaService', function ($scope, $state ,$auth, $localStorage, craftsvillaService) {
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
        console.log(response.s)
        if(response.s==1 )
				{
          $localStorage.loginData = response.d;
          $state.go('shipping');
        }
				else{
          delete $localStorage.loginData;
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
					delete $localStorage.loginData;
					$scope.invalidCred=true;
				}
				else{
					$localStorage.loginData = response.d;
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
				$scope.forgotPasswd = false;
				$scope.sendPasswd=true;

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



	/*$scope.sendPassword = function() {
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
	};*/

	$scope.authenticate = function(provider) {
		$auth.authenticate(provider)
			.then(function(data) {

				var json = {};
				json.sourceType = provider;
				json.accessToken = provider === 'facebook' ? data.access_token : undefined;
				json.clientCode = provider === 'google' ? data.config.data.code : undefined;
				json.clientId = provider === 'google' ? data.config.data.clientId : undefined;
				json.redirectUri = provider === 'google' ? data.config.data.redirectUri : undefined;

				// console.log(json);
				// return;

				craftsvillaService.socialAuth(json)
				.success(function (_data) {
					if(_data.s === 1) {
						$localStorage.loginData = _data.d[0];
						$state.go('shipping');
					}
					else {
						delete $localStorage.loginData;
					}
				})
				.error(function (_err) {
					console.log(_err);
				})
			})
			.catch(function(error) {
				console.log(error);
			});
	};

    $scope.initLogin = function() {
      console.log("Login Initialised");
    };
	$scope.initLogin();

	}]);
});
