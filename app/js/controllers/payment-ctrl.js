define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('paymentCtrl', ['$scope', 'craftsvillaService', function ($scope,craftsvillaService) {
			window.scope = $scope;

			// Repeat

			// Tabs
    	 	$scope.changeName = 'Cash On Delivery';
    	 	$scope.paymentMethods = [];
			$scope.changeSlide = function(value) {
				$scope.changeName = value;
				console.log($scope.changeName);
			}
			// Cash On Delivery
			$scope.cashOn = function() {
				alert("cashOn");
			}
			// Credit Card Pay
			$scope.submitCreditForm = function() {
				alert("Credit Card");
				if ($scope.creditForm.$valid) {
					console.log($scope.creditForm);
				}
			}
			// Debit Card
			$scope.debitCard = function() {
				alert("debit Card");
			}
			// Net Banking
			$scope.netBanking = function() {
				alert("Net Banking");
			}
			// Pay U Money
			$scope.payUbtn = function() {
				alert("Pay U Money");
			}
			// Pay U Money
			$scope.getPayments = function() {
				craftsvillaService.getPaymentMethods()
				.success( function(response) {
					console.log(response);
					$scope.paymentMethods = response.d;
					console.log($scope.paymentMethods);
				})
				.error(function(err) {

				})
			}

			$scope.getOrderproducts = function() {
				craftsvillaService.assignAddressToQuote(3034030, 3034030)
				.success( function(response) {
					console.log(response);
					$scope.productDetails = response;
				})
				.error(function(err) {
					console.log(err);

				})
			}

			$scope.initPayment = function() {
				console.log("initializing Payment");
				$scope.getPayments();
				$scope.getOrderproducts();
			}

			$scope.initPayment();

    }]);
});
