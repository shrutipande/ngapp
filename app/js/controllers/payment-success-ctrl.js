define(['./index'], function (controllers) {
     controllers.controller('paymentSuccessCtrl', ['$scope', '$state' ,'craftsvillaService', '$cookies', function ($scope, $state, craftsvillaService, $cookies) {

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
        $scope.sendAffiliateData();
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
        craftsvillaService.loadQuote()
        .success(function(response) {
          $scope.orderDetailsVal = response.d.product_list;
          $scope.$emit('orderDetailsLoaded');
        });
      $scope.$on('orderDetailsLoaded', function () {
            var productIds = $scope.orderDetailsVal.map(function(_){return _.product_id});
            var quantities = $scope.orderDetailsVal.map(function(_){return _.product_qty});
            var productPrices = $scope.orderDetailsVal.map(function(_){return _.product_price});
            var productTotalQty = $scope.orderDetailsVal.total_qty;
            var productSubTotal = $scope.subTotal
            var productGrandTotal=$scope.grandTotal;
            var count=productIds.length;
            if(typeof MSDtrack != "undefined") {
                MSDtrack({
                  'event':'buy',
                  'sourceProdID':productIds,
                  //'sourceCatgID':'<?php echo $msdSourceCatgID;?>',
                  'prodPrice': productPrices,
                  'prodQty': quantities
                });
            }
            if(typeof dataLayer != "undefined") {
                dataLayer.push({
                  'event':'ChargedEvent',
                  'eventName':'Charged',
                  'chargedId': $scope.orderNo,
                  'chargedAmount': productSubTotal,
                  'totalCartAmount': productGrandTotal,
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
                    quantity: quantities[i],
                    price: {
                      basePrice: quantities[i] * productPrices[i]
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
                    totalOrderValue : productGrandTotal,
                    orderEmail : window.userEmail,
                    mobileNo : window.userMobileNo,
                    item:tempItem,
                }
                digitalData.totalOrderValue = productGrandTotal;
                digitalData.events = "purchase";
            }
        });
      }

      $scope.sendAffiliateData = function() {

        Number.prototype.padLeft = function(base,chr){
         var  len = (String(base || 10).length - String(this).length)+1;
         return len > 0? new Array(len).join(chr || '0')+this : this;
        };

        var d = new Date,
        dformat = [
          d.getFullYear(),
          (d.getMonth()+1).padLeft(),
          d.getDate().padLeft()
          ].join('-')+
          ' ' +
        [ d.getHours().padLeft(),
          d.getMinutes().padLeft(),
          d.getSeconds().padLeft()].join(':');

        var affiliateName = '';
        var utmMedium = '';
        if($cookies.get('affiliate')) {
          affiliateName = $cookies.get('affiliate');
        }
        if($cookies.get('utm_medium')) {
          utmMedium = $cookies.get('utm_medium');
        }
        craftsvillaService.sendAffiliateData(dformat, affiliateName, $scope.orderNo, $scope.grandTotal, utmMedium)
        .success(function(response) {
          console.log(response);
        })
        .error(function(error) {
          throw new Error(err);
        });
      }
      $scope.initPaymentSuccess = function() {
          $scope.onSuccessDetails();
          $scope.getRecommendation();
          $scope.scrollToTop();
	};
	$scope.initPaymentSuccess();

    }]);
});
