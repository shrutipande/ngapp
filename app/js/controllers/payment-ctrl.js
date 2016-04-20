define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('paymentCtrl', ['$scope', '$state', 'craftsvillaService', 'IMGHOST','PRODUCTURL', function ($scope,$state,craftsvillaService,IMGHOST,PRODUCTURL) {
			var controllerRef = this;
			window.scope = $scope;
			$scope.forms = {};
			$scope.credit = {};
			$scope.debit = {};
			$scope.netbanking = {};
			$scope.imgHost = IMGHOST;
			$scope.prdctUrl = PRODUCTURL;
			// Repeat

			// Tabs
    	 	$scope.changeName = 'Cash On Delivery';
    	 	$scope.finalQuoteData = null;
    	 	$scope.shippingAdressData = null;
    	 	$scope.shippingAmountData = null;
			 	$scope.paymentMethods = [{"pid":"1","method":"Cash On Delivery","bankcode":null,"content":null},{"pid":"4","method":"Credit card","bankcode":null,"content":null},{"pid":"5","method":"Debit Card","bankcode":null,"content":null},{"pid":"6","method":"Net Banking","bankcode":null,"content":{"priority":[{"bid":"38","bank_name":"Punjab Nation Bank - Corporate","bank_code":"CPNB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"37","bank_name":"Punjab Nation Bank - Retail","bank_code":"PNBB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"36","bank_name":"Catholic Syrian Bank","bank_code":"CSBN","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"35","bank_name":"ING Vysya","bank_code":"INGB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"}],"others":[{"bid":"34","bank_name":"Dhanlaxmi","bank_code":"DLSB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"33","bank_name":"kotak bank","bank_code":"162B","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"32","bank_name":"Deutsche bank","bank_code":"DSHB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"31","bank_name":"State Bank of Patiala","bank_code":"SBPB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"30","bank_name":"Canara Bank","bank_code":"CABB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"29","bank_name":"CityUnion","bank_code":"CUBB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"28","bank_name":"Yes Bank","bank_code":"YESB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"27","bank_name":"Vijaya Bank","bank_code":"VJYB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"26","bank_name":"United Bank Of India","bank_code":"UNIB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"25","bank_name":"Union Bank - Corporate","bank_code":"UBIBC","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"24","bank_name":"Union Bank - Retai","bank_code":"UBIB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"23","bank_name":"South Indian Bank","bank_code":"SOIB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"22","bank_name":"State Bank of Travancore","bank_code":"SBTB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"21","bank_name":"State Bank of Mysore","bank_code":"SBMB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"20","bank_name":"State Bank of India","bank_code":"SBIB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"19","bank_name":"State Bank of Hyderabad","bank_code":"SBHB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"18","bank_name":"State Bank of Bikaner and Jaipur","bank_code":"SBBJB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"17","bank_name":"Karur Vysya - Corporate","bank_code":"KRVBC","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"16","bank_name":"Karur Vysya- Retail","bank_code":"KRVB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"15","bank_name":"Karnataka Bank","bank_code":"KRKB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"14","bank_name":"Jammu and Kashmir Bank","bank_code":"JAKB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"13","bank_name":"Indian Overseas Bank","bank_code":"INOB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"12","bank_name":"IndusInd Bank","bank_code":"INIB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"11","bank_name":"Indian Bank ","bank_code":"INDB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"10","bank_name":"Industrial Development Bank of India","bank_code":"IDBB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"9","bank_name":"ICICI","bank_code":"ICIB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"8","bank_name":"HDFC Bank","bank_code":"HDFB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"7","bank_name":"Federal Bank","bank_code":"FEDB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"6","bank_name":"Development Credit Bank","bank_code":"DCBB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"5","bank_name":"Corporation Bank","bank_code":"CRPB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"4","bank_name":"Central Bank Of India","bank_code":"CBIB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"3","bank_name":"Bank of Maharashtra","bank_code":"BOMB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"2","bank_name":"Bank of India","bank_code":"BOIB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"},{"bid":"1","bank_name":"AXIS Bank","bank_code":"AXIB","logo_url":"http://www.spymobilesoftware.org/images/axis-logo.png"}]}},{"pid":"7","method":"PayU Money","bankcode":null,"content":null}];
			$scope.changeSlide = function(value) {
				$scope.changeName = value;
				$scope.pg = $scope.changeName.split(' ').map(function(_) {return _[0]}).join('').toUpperCase();
			};
			// Cash On Delivery
			$scope.cashOn = function() {
				alert("cashOn");
			};
			// Credit Card Pay



			$scope.pgTypes = {
				'NB': 'NB',
				'CC': 'CC',
				'DC': 'DC'
			};

			$scope.cardTypes = {
				'Visa': {
					'CC': 'CC',
					'DC': 'VISA'
				},
				'MasterCard': {
					'CC': 'CC',
					'DC': 'MAST'
				},
				'American Express': {
					'CC': 'AMEX',
					'DC': 'AMEX'
				},
				'Diners Club': {
					'CC': 'DINR',
					'DC': 'DINR'
				},
				'Maestro': {
					'DC': 'MAES',
					'CC': 'MAES'
				}
			};

			$scope.getBankCode = function (type, pg) {
				return $scope.cardTypes[type][pg];
			};

			$scope.submitCOD = function () {
				craftsvillaService.placeOrderCOD()
				.success(function (data) {
					$state.go('payments-success');
				})
				.error(function (error) {
					$state.go('payments-failure');
				});
			};

			$scope.submitCreditForm = function() {
				craftsvillaService.placeOrder({
					"pg": $scope.pg,
					"bankcode": $scope.getBankCode($scope.forms.creditForm.cardNumber.$ccType, $scope.pg),
					"ccnum": $scope.credit.cardNumber,
					"ccname": $scope.credit.cardName,
					"ccvv": $scope.credit.cardCvv,
					"ccexpmon":$scope.credit.cardMonth,
					"ccexpyr": $scope.credit.cardYear
				})
				.success(function(data){
					// console.log(data);
					// return;
					var form = document.createElement("form");
			    form.setAttribute("method", 'POST');
			    form.setAttribute("action", data.url);

			    for(var key in data.parameter) {
		        if(data.parameter.hasOwnProperty(key)) {
	            var hiddenField = document.createElement("input");
	            hiddenField.setAttribute("type", "hidden");
	            hiddenField.setAttribute("name", key);
	            hiddenField.setAttribute("value", data.parameter[key]);

	            form.appendChild(hiddenField);
		         }
			    }

					document.body.appendChild(form);
    			form.submit();

					// craftsvillaService.paymentRedirect(payUData.url, payUData.parameter)
					// .success(function(data) {
					//
					// })
					// .error(function(err){
					// 	console.log(err);
					// })
				})
				.error(function(err){
					console.log(err);
				});
			};

			$scope.submitDebitForm = function() {
				craftsvillaService.placeOrder({
					"pg": $scope.pg,
					"bankcode": $scope.getBankCode($scope.forms.debitForm.cardNumber.$ccType, $scope.pg),
					"ccnum": $scope.debit.cardNumber,
					"ccname": $scope.debit.cardName,
					"ccvv": $scope.debit.cardCvv,
					"ccexpmon":$scope.debit.cardMonth,
					"ccexpyr": $scope.debit.cardYear
				})
				.success(function(data){
					// console.log(data);
					// return;
					var form = document.createElement("form");
			    form.setAttribute("method", 'POST');
			    form.setAttribute("action", data.url);

			    for(var key in data.parameter) {
		        if(data.parameter.hasOwnProperty(key)) {
	            var hiddenField = document.createElement("input");
	            hiddenField.setAttribute("type", "hidden");
	            hiddenField.setAttribute("name", key);
	            hiddenField.setAttribute("value", data.parameter[key]);

	            form.appendChild(hiddenField);
		         }
			    }

					document.body.appendChild(form);
    			form.submit();

					// craftsvillaService.paymentRedirect(payUData.url, payUData.parameter)
					// .success(function(data) {
					//
					// })
					// .error(function(err){
					// 	console.log(err);
					// })
				})
				.error(function(err){
					console.log(err);
				});
			};
			$scope.submitNBForm = function() {
				craftsvillaService.placeOrder({
					"pg": $scope.pg,
					"bankcode":$scope.netbanking.bank_code,
				})
				.success(function(data){
					// console.log(data);
					// return;
					var form = document.createElement("form");
			    form.setAttribute("method", 'POST');
			    form.setAttribute("action", data.url);

			    for(var key in data.parameter) {
		        if(data.parameter.hasOwnProperty(key)) {
	            var hiddenField = document.createElement("input");
	            hiddenField.setAttribute("type", "hidden");
	            hiddenField.setAttribute("name", key);
	            hiddenField.setAttribute("value", data.parameter[key]);

	            form.appendChild(hiddenField);
		         }
			    }

					document.body.appendChild(form);
    			form.submit();

					// craftsvillaService.paymentRedirect(payUData.url, payUData.parameter)
					// .success(function(data) {
					//
					// })
					// .error(function(err){
					// 	console.log(err);
					// })
				})
				.error(function(err){
					console.log(err);
				});
			};
			// Debit Card
			$scope.debitCard = function() {
				$scope.pg = 'DC';
			};
			// Net Banking
			$scope.netBanking = function() {
				$scope.pg = 'NB';
			};
			// Pay U Money
			$scope.payUbtn = function() {
				alert("Pay U Money");
			};
			// Pay U Money
			$scope.getPayments = function() {
				craftsvillaService.getPaymentMethods()
				.success( function(response) {
					console.log(response);
					$scope.paymentMethods = response.d[0];
					console.log($scope.paymentMethods);
				})
				.error(function(err) {

				});
			};

			$scope.getOrderproducts = function() {
				craftsvillaService.assignAddressToQuote(3034030, 3034030)
				.success( function(response) {
					console.log(response);
					$scope.productDetails = response;
				})
				.error(function(err) {
					console.log(err);
				});
			};

			$scope.finalQuoteDetails = function() {
				craftsvillaService.loadFinalQuote()
				.success(function(response) {
					console.log(response);
					$scope.finalQuoteData = response.d.product_list;
					$scope.shippingAdressData = response.d.shippingAddress;
					$scope.shippingAmountData = response.d;
				});
			};

			$scope.initPayment = function() {
				console.log("initializing Payment");
				// $scope.getPayments();
				$scope.getOrderproducts();
				$scope.finalQuoteDetails();
			};

			$scope.initPayment();



    }]);
});
