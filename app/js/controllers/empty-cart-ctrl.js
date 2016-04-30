define(['./index'], function (controllers) {
     controllers.controller('emptyCartCtrl', ['$scope', function ($scope, $rootScope) {
        $scope.scrollToTop();
    }]);
});
