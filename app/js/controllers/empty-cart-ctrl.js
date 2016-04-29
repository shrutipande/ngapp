define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('emptyCartCtrl', ['$scope', function ($scope, $rootScope) {
        $scope.scrollToTop();
    }]);
});
