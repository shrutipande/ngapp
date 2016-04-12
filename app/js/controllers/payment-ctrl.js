define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('paymentCtrl', ['$scope', function ($scope) {
    	 $scope.changeName = null;
    	      $scope.changeSlide = function(value) {
    	      	alert(value);
    	      	$scope.changeName = value;
    	      	console.log($scope.changeName)
    	      }

    }]);
});
