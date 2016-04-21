define(['./index'], function (controllers) {
	'use strict';
	controllers.controller('checkoutCartCtrl', ['$scope', 'craftsvillaService', '$state', '$window', function ($scope, craftsvillaService, $state, $window) {
		$scope.successCoupon = false;
		$scope.showFormNote = false;
		$scope.coupon = {};
		$scope.isLoggedIn = false;
  		$scope.couponMessage = null;

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
			$scope.outOfStockProducts = [];
			$scope.inStockCod = [];
			$scope.inStockNotCod = [];
			craftsvillaService.loadQuote()
			.success(function(response) {
				angular.forEach(response.d.product_list, function(product) {
					if(!product.IsInStock) {
						$scope.outOfStockProducts.push(product);
					} else {
						if(product.cod_available) {
							$scope.inStockCod.push(product);
						} else {
							$scope.inStockNotCod.push(product);
						}
					}
				});
				updateTotals(response);
			})
			.error(function (err) {
				throw new Error(err);
			})
		};

		$scope.proceedToCheckout = function() {
			craftsvillaService.loginCheck()
				.success(function (response) {
					if (response.s == 0) {
						$state.go('login');
					}
					else {
						$state.go('shipping');
					}
				})
				.error(function (error) {
					throw new Error(err);
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
        data.waitingCartItem = false;
        divideProducts(response);
				$scope.itemRemoved = 1;
				$scope.latestRemovedItem = product_id;
				updateTotals(response);
			})
			.error(function(error) {
        data.waitingCartItem = false;
        console.log(error);
			});

		};

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
					$scope.discount = (1 - ($scope.grandTotal / $scope.subTotal)) * 100;
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

		$scope.initCheckoutCart = function() {
			$scope.getCartDetails();
			$scope.checkLogin();
		}

		$scope.checkLogin = function() {
			craftsvillaService.loginCheck()
			.success(function(response) {
				if(response.s == 1) {
					$scope.isLoggedIn = true;
				} else {
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
				$scope.discount = (1 - ($scope.grandTotal / $scope.subTotal)) * 100;
			}
		}

		$scope.continueShopping = function() {
			$window.history.back();
		}
		$scope.initCheckoutCart();
	}]);
});
