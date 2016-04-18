define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('paymentSuccessCtrl', ['$scope', '$state' ,'craftsvillaService', function ($scope, $state, craftsvillaService) {



    $scope.getOrderDetails = function() {
    	console.log("details");
		craftsvillaService.getSuccessData()
		.success(function (response) {
				console.log(response.d.product_list);
				$scope.orderDetails=response.d.product_list;
				$scope.order=response.d;
				//$scope.orderNo=response.d.Order_number;
				console.log($scope.order);

				$scope.shippingDetails=$scope.order.shippingAddress;
				console.log('name:');
				console.log($scope.shippingDetails.firstname);
				console.log($scope.shippingDetails.telephone);


				$scope.getSubTotal();

				$scope.couponCode=$scope.order.coupon_code;
				console.log($scope.couponCode);
				$scope.shippingAmount=$scope.order.shipping_amount;
				console.log($scope.shippingAmount);
				console.log($scope.shippingAmount);
				$scope.totalPayable=$scope.subTotal-$scope.couponCode+$scope.shippingAmount;


		})
		.error(function (err) {
			console.log('error');
			throw new Error(err);
		})
    	};

    $scope.getSubTotal = function(){
     	$scope.subTotal = 0;
     	for(var i = 0; i <$scope.orderDetails.length; i++){
    		 var product = $scope.orderDetails[i];
        	$scope.subTotal += parseInt(product.product_price);
    }
     console.log($scope.subTotal);
    return $scope.subTotal;

}

    $scope.continueShopping = function() {
		console.log('click on continue shopping');
	};

	$scope.initPaymentSuccess = function() {
		console.log("Payment success Initialised");
		$scope.getOrderDetails();
	};
	$scope.initPaymentSuccess();

    }]);
});
