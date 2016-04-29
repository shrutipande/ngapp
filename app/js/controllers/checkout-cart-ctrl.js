define(['./index'], function (controllers) {
	'use strict';
	controllers.controller('checkoutCartCtrl', ['$scope', '$localStorage', 'craftsvillaService', '$state', '$window', function ($scope, $localStorage, craftsvillaService, $state, $window) {
		$scope.successCoupon = false;
		$scope.showFormNote = false;
		$scope.coupon = {};
		$scope.isLoggedIn = false;
  		$scope.couponMessage = null;
		$scope.proceedToCheckoutLoader=false;


		$scope.options = [
			{'id': 1, 'label': '1'},
			{'id': 2, 'label': '2'},
			{'id': 3, 'label': '3'},
			{'id': 4, 'label': '4'},
			{'id': 5, 'label': '5'},
			{'id': 6, 'label': '6'},
			{'id': 7, 'label': '7'},
			{'id': 8, 'label': '8'},
			{'id': 9, 'label': '9'},
		];

		$scope.outOfStockProducts = [];
		$scope.inStockCod = [];
		$scope.inStockNotCod = [];
		$scope.itemRemoved = 0;
		$scope.latestRemovedItem = null;
	$scope.couponWait=false;
	$scope.waitingCartItem=false;

		$scope.getCartDetails = function() {
	  $scope.waitingCartDatails=true;
			craftsvillaService.loadQuote()
			.success(function(response) {
				if(response.d.product_list.length==0){
					$scope.items = 0;
					return;
				}
				$scope.getCartDetailsVal = response.d;


		$scope.waitingCartDatails=false;
	  //  $rootscope.sc = response.d.product_list;
		var _outOfStockProducts = [];
				var _inStockCod = [];
				var _inStockNotCod = [];

				angular.forEach(response.d.product_list, function(product) {
					if(!product.IsInStock) {
						_outOfStockProducts.push(product);
					} else {
						if(product.cod_available) {
							_inStockCod.push(product);
						} else {
							_inStockNotCod.push(product);
						}
					}
				});

				$scope.outOfStockProducts = _outOfStockProducts;
				$scope.inStockCod = _inStockCod;
				$scope.inStockNotCod = _inStockNotCod;

				updateTotals(response);
			})
			.error(function (err) {
		$scope.waitingCartDatails=false;
		throw new Error(err);
			})
		};
		$scope.loginNow= function (){
		  window.sticktocart = true;
		  $state.go("login");
		};
		$scope.proceedToCheckout = function() {
			if ($scope.outOfStockProducts.length>0){
				alert("Please remove out of stock products.")
				return;
			}
			$scope.proceedToCheckoutLoader=true;
			$scope.getCartDetailsVal;
			var productIds = [];
			var productName = [];
			var allProducts = $scope.getCartDetailsVal.product_list;
			angular.forEach(allProducts, function(product) {
				productIds.push(product.product_id);
				productName.push(product.product_name);
			});
			if(typeof dataLayer != "undefined") {
				dataLayer.push({
					'event':'CheckedOutEvent',
					'eventName':'CheckedOut',
					'eventAction':$scope.getCartDetailsVal.total_items,
					'itemsCount':$scope.getCartDetailsVal.total_items
				});
				dataLayer.push({
					'event':'TappedButtonEvent',
					'eventName':'TappedButton',
					'type':'ProceededToPayment',
					'productInfo':productName,
					'finalAmount':$scope.getCartDetailsVal.sub_total
				});

			}

			if(typeof MSDtrack != "undefined") {
				MSDtrack({
					'event':'placeOrder',
					'sourceProdID':productIds,
					//'sourceCatgID':'<?php echo $msdSourceCatgID;?>',
					'prodPrice':$scope.getCartDetailsVal.sub_total,
					'prodQty':$scope.getCartDetailsVal.total_qty
				});
			}

			if(typeof _satellite != "undefined") {
				_satellite.track('checkout-initiation');
			}

			craftsvillaService.loginCheck()
				.success(function (response) {
					if (response.s == 0) {
						delete $localStorage.loginData;
						$state.go('login');
						$scope.proceedToCheckoutLoader=false;
					}
					else {
						$localStorage.loginData = response.d;
						$state.go('shipping');
					}
				})
				.error(function (error) {
					throw new Error(err);
					$scope.proceedToCheckoutLoader=false;
				})
		};

		$scope.removeProductFromCart = function(product_id,data) {
	  data.waitingCartItem = true;
			var data = {
				productID: product_id
			};
			var productIds = [];
			productIds.push(data);
			craftsvillaService.removeQuoteItems(productIds)
			.success(function(response) {
					if(response.d.product_list.length==0){
					$scope.items = 0;
				}
				console.log('hi remove');
		data.waitingCartItem = false;
		divideProducts(response);
				$scope.itemRemoved = 1;
				$scope.latestRemovedItem = product_id;
				updateTotals(response);
				document.body.scrollTop = 0;
			})
			.error(function(error) {
		data.waitingCartItem = false;
		console.log(error);
			});

		};
		$scope.cartTracking = function() {
			if(typeof _satellite != "undefined") {
				 digitalData.page={
					  pageInfo:{
						pageName:"cart",
					  },
					  category:{
						pageType:"cart",
						primaryCategory: "cart",
					  },
					  device:{
						deviceType:isMobile
					  },
					  currencycode:{
					  currencyCode : 'INR',
					},
				}
			}
		}
		$scope.removeAllNonCodItems = function() {
			var productIds = [];
			var allProducts = $scope.inStockNotCod;
			angular.forEach(allProducts, function(product) {
				var data = {
					productID: product.product_id
				};
				productIds.push(data);
			});
			craftsvillaService.removeQuoteItems(productIds)
			.success(function(response) {
				$scope.inStockNotCod = [];
				updateTotals(response);
			})
			.error(function(error) {
				console.log(error);
			});
		};

		$scope.removeOutOfStockProducts = function() {
			var allProducts = $scope.outOfStockProducts;
			angular.forEach(allProducts, function(product) {
				var data = {
					productID: product.product_id
				};
				productIds.push(data);
			});
			craftsvillaService.removeQuoteItems(productIds)
			.success(function(response) {
				$scope.outOfStockProducts = [];
				updateTotals(response);
			})
			.error(function(error) {
				console.log(error);
			});

		}

		$scope.addNoteToSeller = function(index, product_id, comment,data) {
	  data.showFormNote =false;
	  data.waitingCartItem = true;
			craftsvillaService.addNoteToSeller(product_id, comment)
			.success(function(response) {
		data.waitingCartItem = false;
		$scope.getCartDetails();
			})
			.error(function(error) {
		data.waitingCartItem = false;
		console.log(error);
			});
		};

		$scope.updateNoteToSeller = function(data, note) {
			data.showFormNote = true;
			data.sellernote = note;
		};

		$scope.removeNoteToSeller = function(data) {
			if(!data) return;

			craftsvillaService.removeNoteToSeller(data.product_id)
			.success(function(response) {
				data.seller_note = null;
				data.showFormNote = false;
			})
			.error(function(error) {
				console.log(error);
			});
		};

		$scope.showNoteToSeller = function(data) {
			data.showFormNote = true;
		};

		$scope.hideNoteToSeller = function(data) {
			data.showFormNote = false;
		};

		$scope.applyCoupon = function() {
	  $scope.couponWait=true;
			craftsvillaService.applyCoupon($scope.coupon.couponcode)
			.success(function(response) {
		$scope.couponWait = false;
				if(response.s == 1){
					$scope.successCoupon = true;
					$scope.couponCode = response.d.coupon_code;
					$scope.couponMessage = response.m;
					$scope.subTotal = response.d.sub_total;
					$scope.totalDiscount = response.d.totol_discount;
					$scope.shippingAmount = response.d.shipping_amount;
					$scope.grandTotal = response.d.grand_total;
					$scope.discount = ($scope.totalDiscount / $scope.subTotal) * 100;
				} else {
					$scope.couponMessage = response.m;
				}
			})
			.error(function (err) {
				throw new Error(err);
			});
		};

		$scope.removeCoupon = function() {
			craftsvillaService.removeCoupon($scope.coupon.couponcode)
			.success(function (response) {
				$scope.successCoupon = false;
				$scope.couponMessage = response.m;
				$scope.subTotal = response.d.sub_total;
				$scope.totalDiscount = response.d.totol_discount;
				$scope.shippingAmount = response.d.shipping_amount;
				$scope.grandTotal = response.d.grand_total;
			})
			.error(function (err) {
				throw new Error(err);
			})

		};

		$scope.updateQuantity = function(quantity, product_id,data) {
	  data.waitingCartItem = true;

	  craftsvillaService.updateQty(product_id, quantity.id)
			.success(function(response) {
		data.waitingCartItem = true;
				document.body.scrollTop = 0;
		$scope.getCartDetails();
			})
			.error(function(error) {
		data.waitingCartItem = true;

		console.log(error);
			});
		};

		$scope.addToCart = function() {
			craftsvillaService.addToQuote($scope.latestRemovedItem, 1)
			.success(function (response) {
				divideProducts(response);
				updateTotals(response);
				$scope.latestRemovedItem = null;
				$scope.itemRemoved = 0;
			})
			.error(function(error) {
				console.log(error);
			});
		}


		$scope.checkLogin = function() {
			craftsvillaService.loginCheck()
			.success(function(response) {
				if(response.s == 1) {
					$localStorage.loginData = response.d;
					$scope.isLoggedIn = true;
				} else {
					delete $localStorage.loginData;
					$scope.isLoggedIn = false;
				}
			})
			.error(function (error) {
				throw new Error(err);
			});
		}

		$scope.initializeQuantity = function(data) {
			data.quantity = $scope.options[data.product_qty-1];
		}

		function divideProducts(response) {
			$scope.inStockCod = [];
			$scope.inStockNotCod = [];
			angular.forEach(response.d.product_list, function(product) {
				if(product.cod_available) {
					$scope.inStockCod.push(product);
				} else {
					$scope.inStockNotCod.push(product);
				}
			});
		}

		function updateTotals(response) {
			$scope.items = response.d.total_items;
			$scope.grandTotal = response.d.grand_total;
			$scope.subTotal = response.d.sub_total;
			$scope.totalDiscount = response.d.totol_discount;
			$scope.shippingAmount = response.d.shipping_amount;
			if(response.d.coupon_code && response.d.coupon_code.length) {
				$scope.successCoupon = true;
				$scope.couponCode = response.d.coupon_code;
				$scope.discount = ($scope.totalDiscount / $scope.subTotal) * 100;
			}
		}

		$scope.continueShopping = function() {
			window.location.href = "/";
		}


    $scope.initCheckoutCart = function() {
	      $scope.getCartDetails();
	      $scope.checkLogin();
		  $scope.scrollToTop();
		  $scope.cartTracking();

    }
    $scope.initCheckoutCart();

	}]);
});
