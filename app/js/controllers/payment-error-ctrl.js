define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('paymentErrorCtrl', ['$scope',  function ($scope, $rootScope) {
        $scope.scrollToTop();
        if(typeof _satellite != "undefined") {
                digitalData.page={
                    pageInfo:{
                      pageName:"error:payment",
                    },
                    category:{
                      pageType:"error",
                      primaryCategory: "error:payment",
                    },
                    device:{
                      deviceType:isMobile
                    },
                    currencycode:{
                      currencyCode : 'INR',
                    },
                  }
        }
    }]);
});
