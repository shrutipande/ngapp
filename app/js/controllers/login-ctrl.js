define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('loginCtrl', ['$scope', '$rootScope', function ($scope) {
        $scope.guestUser = false;
      $scope.changeGuest = function() {
        alert("hi");
      };
    }]);
});