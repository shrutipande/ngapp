define(['./index'], function (controllers) {
	'use strict';
	controllers.controller('checkoutCartCtrl', ['$scope', 'craftsvillaService', '$state', function ($scope, craftsvillaService, $state) {
		var successCoupon = false;
		$scope.showNote = false;

		$scope.outOfStockProducts = [];
		$scope.inStockCod = [];
		$scope.inStockNotCod = [];
		$scope.itemRemoved = 0;
		$scope.latestRemovedItem = null;

		$scope.getCartDetails = function() {
			craftsvillaService.loadQuote()
			.success(function(response) {
				// console.log(response);
				angular.forEach(response.d.product_list, function(product) {
					if(!product.IsInStock) {
						$scope.outOfStockProducts.push(product);
					} else {
						if(!product.cod_available) {
							$scope.inStockCod.push(product);
						} else {
							$scope.inStockNotCod.push(product);
						}
					}
				});
				// console.log($scope.inStockProducts);
				$scope.items = response.d.total_items;
				$scope.grandTotal = response.d.grand_total;
				$scope.subTotal = response.d.sub_total;
				$scope.totalDiscount = response.d.totol_discount;
				$scope.shippingAmount = response.d.shipping_amount;
				$scope.shownote
				console.log($scope.inStockCod)

			})
			.error(function (err) {
				throw new Error(err);
			})
		};

		$scope.proceedToCheckout = function() {
			console.log("click on proceedToCheckout");
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

		$scope.removeOutOfStockProducts = function() {
			var productIds = [];
			console.log("inside out of stock");
			angular.forEach($scope.outOfStockProducts, function(product) {
				var data = {
					productID: product.product_id
				};
				productIds.push(data);
			});
			craftsvillaService.removeQuoteItems(productIds)
			.success(function(response) {
				console.log("products removed");
				console.log(response);
				$scope.outOfStockProducts = [];
				angular.forEach(response.d.product_list, function(product) {
					$scope.outOfStockProducts.push(product);
				});
			})
			.error(function(error) {
				console.log(error);
			});
		};

		$scope.removeProductFromCart = function(product_id) {
			console.log(product_id);
			var data = {
				productID: product_id
			};
			var productIds = [];
			productIds.push(data);
			console.log(productIds);
			console.log("inside remove from cart");
			craftsvillaService.removeQuoteItems(productIds)
			.success(function(response) {
				console.log("product removed");
				console.log(response);
				divideProducts(response);
				// $scope.inStockProducts = response.d.product_list;
				$scope.itemRemoved = 1;
				$scope.latestRemovedItem = product_id;
			})
			.error(function(error) {
				console.log(error);
			});

		};

		$scope.removeAllItems = function() {
			console.log("click on removeAllItems");
			var productIds = [];
			var allProducts = $scope.outOfStockProducts.concat($scope.inStockCod.concat($scope.inStockNotCod));
			angular.forEach(allProducts, function(product) {
				var data = {
					productID: product.product_id
				};
				productIds.push(data);
			});
			craftsvillaService.removeQuoteItems(productIds)
			.success(function(response) {
				console.log("products removed");
				console.log(response);
				$scope.inStockProducts = [];
				$scope.inStockCod = [];
				$scope.inStockNotCod = [];
			})
			.error(function(error) {
				console.log(error);
			});
		};

		$scope.addNoteToSeller = function(index, product_id, comment,data) {
			console.log(comment);
			console.log(index);
			// if ($scope['sellerForm'+index].$valid) {
			// 	var comment = $scope.sellerForm1.sellernote;
			craftsvillaService.addNoteToSeller(product_id, comment)
			.success(function(response) {
				console.log("comment added");
				console.log(response);
				$scope.getCartDetails();
				data.showFormNote =false;
			})
			.error(function(error) {
				console.log(error);
			});
		};

		$scope.updateNoteToSeller = function(data) {
			console.log(data.sellernote);
			data.showFormNote =true;

		};

		$scope.removeNoteToSeller = function() {
			console.log("click on removeNoteToSeller");
		};

		$scope.showNoteToSeller = function(data) {
			console.log("click on showNoteToSeller");
			$scope.showNote = true;
			data.showFormNote = true;
		};

		$scope.hideNoteToSeller = function() {
			console.log("click on hideNoteToSeller");
			$scope.showNote = false;
		};

		$scope.applyCoupon = function() {
			//console.log($scope.couponForm);
			if ($scope.couponForm.$valid) {
				console.log($scope.coupon);

				craftsvillaService.applyCoupon($scope.coupon.couponcode)
				.success(function (response) {
					console.log(response);
					if( response.s == 1){
						console.log('success');
						//console.log(response.d[0]);
						$scope.successCoupon = true;
						$scope.couponCode = response.d.coupon_code;
						$scope.couponMessage = response.m;
						$scope.subTotal = response.d.sub_total;
						$scope.totalDiscount = response.d.totol_discount;
						$scope.shippingAmount = response.d.shipping_amount;
						$scope.grandTotal = response.d.grand_total;
						$scope.discount = (1 - ($scope.grandTotal / $scope.subTotal)) * 100;
						console.log( (1 - ($scope.grandTotal / $scope.subTotal)) * 100 );
						//$discount = (1 - ($discountPrice / $productPrice)) * 100;
					}else{
						console.log('fail');
						$scope.couponMessage = response.m;
					}
				})
				.error(function (err) {
					throw new Error(err);
				})

			}
		};

		$scope.removeCoupon = function() {
			console.log("click on removeCoupon");

			craftsvillaService.removeCoupon($scope.coupon.couponcode)
			.success(function (response) {
				$scope.successCoupon = false;
				console.log(response);
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

		$scope.updateQuantity = function() {
			console.log("click on updateQuantity");
		};

		$scope.addToCart = function() {
			craftsvillaService.addToQuote($scope.latestRemovedItem, 1)
			.success(function (response) {
				console.log(response);
				divideProducts(response);
				$scope.latestRemovedItem = null;
				$scope.itemRemoved = 0;
			})
			.error(function(error) {
				console.log(error);
			});
		}

		$scope.initCheckoutCart = function() {
			$scope.getCartDetails();
		}

		function divideProducts(response) {
			$scope.inStockCod = [];
			$scope.inStockNotCod = [];
			angular.forEach(response.d.product_list, function(product) {
				if(!product.cod_available) {
					$scope.inStockCod.push(product);
				} else {
					$scope.inStockNotCod.push(product);
				}
			});
		}
		$scope.initCheckoutCart();
    }]);
});
