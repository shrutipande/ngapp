define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('loginCtrl', ['$scope', '$auth', 'craftsvillaService', function ($scope, $auth, craftsvillaService) {

        $scope.guestUser = false;

      $scope.changeGuest = function() {
        //$scope.guestUser = !$scope.guestUser;
        craftsvillaService.postQuote(1877026, 393553539)
        .success(function (response) {
          console.log(response);
          $scope.quote = response;
          console.log( + $scope.quote)
        })
        .error(function (err) {
          throw new Error(err);
        })
      };

      $scope.authenticate = function(provider) {
          $auth.authenticate(provider);
        };

    }]);
});
