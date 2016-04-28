define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('paymentSuccessCtrl', ['$scope', '$state' ,'craftsvillaService', function ($scope, $state, craftsvillaService) {

      $scope.norecommendation = false;
      $scope.waitingOrderDatails=true;

    $scope.onSuccessDetails = function() {
    	console.log("details");
		craftsvillaService.getOrderDetails()
		.success(function (response) {
      $scope.waitingOrderDatails=false;
				console.log(response.d.product_list);
				$scope.orderDetails=response.d.product_list;
				$scope.order=response.d;
				$scope.orderNo=response.d.Order_number;

        console.log(response.d.Order_number);
				console.log($scope.order);

				$scope.shippingDetails=$scope.order.shippingAddress;
        $scope.subTotal=$scope.order.sub_total;
        $scope.grandTotal=$scope.order.grand_total;


				console.log('name:');
				console.log($scope.shippingDetails.firstname);
				console.log($scope.shippingDetails.telephone);


				//$scope.getSubTotal();

				$scope.couponCode=$scope.order.coupon_code;
				console.log($scope.couponCode);
				$scope.shippingAmount=$scope.order.shipping_amount;
				console.log($scope.shippingAmount);
				console.log($scope.shippingAmount);

				$scope.totalPayable=$scope.subTotal-$scope.couponCode+$scope.shippingAmount;
        $scope.orderDetailsTracker();


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

      $scope.getRecommendation = function() {
        craftsvillaService.getRecommendation()
            .success(function (response) {
              if (response.s==1)
              $scope.recommendProducts = response.d;
              else
                $scope.norecommendation = true
            })
            .error(function (error) {
                console.log(error);
            });
      };
      $scope.orderDetailsTracker = function() {
        var productIds = $scope.orderDetails.map(function(_){return _.product_id});
        var productQty = $scope.orderDetails.product_qty;
        var productPrice=$scope.subTotal;
        var count=productIds.length;
        if(typeof MSDtrack != "undefined") {
            MSDtrack({
              'event':'buy',
              'sourceProdID':productIds,
              //'sourceCatgID':'<?php echo $msdSourceCatgID;?>',
              'prodPrice': productPrice,
              'prodQty': productQty
            });
        }
        if(typeof dataLayer != "undefined") {
            dataLayer.push({
              'event':'ChargedEvent',
              'eventName':'Charged',
              'chargedId': $scope.orderNo,
              'chargedAmount': productPrice,
              'totalCartAmount': productPrice,
              'cartProductIDs':productIds
            });
        }

        if(typeof _satellite != "undefined") {
            digitalData.page={
                pageInfo:{
                  pageName:"order complete",
                },
                category:{
                  pageType:"order complete",
                  primaryCategory: "order complete",
                },
                device:{
                  deviceType:isMobile
                },
                currencycode:{
                  currencyCode : 'INR',
                },
              }
          var tempItem= [];
          var orderId = $scope.orderNo;
          for(var i = 0; i < count; i++){
          tempItem[i]=  {
                quantity: productQty[i],
                price: {
                basePrice: productQty[i] * productPrice[i]
                },
                productInfo:{
                productID: productIds[i] //SKU
                }
                }

              }
              //alert(JSON.stringify(tempItem));
             digitalData.transaction = {
                purchaseID: orderId,
                paymentMethod: window.paymentMethods,
                totalOrderValue : productPrice,
                orderEmail : window.userEmail,
                 item:{tempItem},
            }
            //digitalData.totalOrderValue = "<?php echo $total_amount; ?>";
            digitalData.events = "purchase";
        }
      }
      $scope.initPaymentSuccess = function() {
         $scope.onSuccessDetails();
        $scope.getRecommendation();

	};
	$scope.initPaymentSuccess();

    }]);
});
