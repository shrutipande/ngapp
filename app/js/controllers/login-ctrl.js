define(['./index'], function(controllers) {
    'use strict';
    controllers.controller('loginCtrl', ['$scope', '$state', '$auth', 'craftsvillaService', function($scope, $state, $auth, craftsvillaService) {
        $scope.guestUser = false;
        $scope.forgotPasswd = false;
        $scope.sendPasswd = false;
        $scope.invalidCred = false;
        $scope.userForgot = {};
        $scope.userLogin = {};
        $scope.changeGuest = function() {
            console.log("click on continue as guest");
            $scope.guestUser = true;
        };
        $scope.changeGuestCheckout = function() {
            if ($scope.guestUserForm.$valid) {
                var emailId = $scope.guest.guestUserEmail;
                craftsvillaService.continueAsGuest(emailId)
                    .success(function(response) {
                        if (response.s == 0) {
                            alert("Invalid email ID or Password!");
                        } else {
                            $state.go('shipping');
                        }
                    })
                    .error(function(err) {
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

        $scope.authenticate = function(provider) {
            $auth.authenticate(provider);
        };
    }]);

});
