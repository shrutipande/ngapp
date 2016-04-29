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
			$scope.guestCheckoutLoader = true;
      var emailId = $scope.guest.guestUserEmail;
			craftsvillaService.continueAsGuest(emailId)
			.success(function (response) {
        $scope.guestCheckoutLoader = false;
        if(response.s==1 )
				{
					//logindata = responjse.d
		  window.userEmail = response.d.email;
          $localStorage.loginData = response.d;
          $state.go('shipping');
        }
				else{
          delete $localStorage.loginData;
				}
			})
			.error(function (err) {
				$scope.guestCheckoutLoader = false;
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
			$scope.loginLoader = true;
			var emailId = $scope.userLogin.email;
			window.userEmail = $scope.userLogin.email;
			var password = $scope.userLogin.password;
			craftsvillaService.getLogin(emailId, password)
			.success(function (response) {
				$scope.loginLoader = false;
				if(response.s==0 )
				{
					delete $localStorage.loginData;
					$scope.invalidCred=true;

				}
				else{
					//loggedin  response.d
					window.userEmail = response.d[0].customerData.email;
					$localStorage.loginData = response.d;
					if(window.sticktocart==true)
						{	$state.go('cart');
						console.log('in cart');}
						else
							{$state.go('shipping');
						console.log('in shipping');}

				}
			})
			.error(function (err) {
				$scope.loginLoader = false;
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
				if (response.s==1) {
					$scope.forgotPasswd = false;
					$scope.sendPasswd=true;
				}
				else{
					alert(response.m);
				}

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
		if(provider == 'google') {
			$scope.gLoader = true;
			$scope.fbLoader = false;
		}
		else {
			$scope.gLoader = false;
			$scope.fbLoader = true;
		}
		$auth.authenticate(provider)
			.then(function(data) {

				var json = {};
				json.sourceType = provider;
				json.accessToken = provider === 'facebook' ? data.access_token : undefined;
				json.clientCode = provider === 'google' ? data.config.data.code : undefined;
				json.clientId = provider === 'google' ? data.config.data.clientId : undefined;
				json.redirectUri = provider === 'google' ? data.config.data.redirectUri : undefined;

				 console.log(provider);
				// return;

				craftsvillaService.socialAuth(json)
				.success(function (_data) {
					$scope.gLoader = false;
					$scope.fbLoader = false;
					if(_data.s === 1) {
						//login data
						$localStorage.loginData = _data.d[0];
						window.userEmail = _data.d[0].customerEmail;
						$state.go('shipping');

					}
					else {
						$scope.gLoader = false;
						$scope.fbLoader = false;
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
	$scope.loginTracker = function() {
		craftsvillaService.loadQuote()
		.success(function(response) {
			$scope.cartDetailsVal = response.d;
			$scope.$emit('cartDetailsLoaded');
		});

		$scope.$on('cartDetailsLoaded', function () {
			var emailId = $scope.userLogin.email;
			if(typeof _satellite != "undefined") {
				 digitalData.page={
		          pageInfo:{
		            pageName:"login page",
		          },
		          category:{
		            pageType:"login",
		            primaryCategory: "login",
		          },
		          device:{
		            deviceType: isMobile
		          },
		          currencycode:{
		            currencyCode : 'INR',
		          },

		        }
		    }
		    if(typeof dataLayer != "undefined") {
			    dataLayer.push({
		            'event':'UserSignedUpEvent',
		            'eventName':'UserSignedUp',
		            'type':'email',
		            'cartValue': $scope.cartDetailsVal.total_items
		        });
			}
		    if(typeof clevertap != "undefined") {
		        clevertap.profile.push({
		            "Site": {
		                "Name":'',
		                "Email": emailId,
		                //"Phone": "+91" +
		            }
		        });
			}
		});
	}
    $scope.initLogin = function() {
      console.log("Login Initialised");
			$scope.scrollToTop();
      		$scope.loginTracker();

    };
	$scope.initLogin();

	}]);
});
