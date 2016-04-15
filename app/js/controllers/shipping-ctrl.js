define(['./index'], function (controllers) {
	'use strict';
	controllers.controller('shippingCtrl', ['$scope', 'craftsvillaService', function ($scope, craftsvillaService) {
		/*var app = angular.module('validApp', []);
		 $scope.addNew={};	
         $scope.editaddr={};
		 $scope.country = ['India','US', 'UK','Dubai'];
		 $scope.editAddr={};
		 $scope.editAddr.country=['India'];
		 $scope.editAddr.fullname='Shruti Kartikey';
		 $scope.editAddr.address='G-1502, Craftsvilla, Lotus Business Park, Goregaon East, Mumbai, Maharashtra - 400056';
		 $scope.editAddr.pincode='7474441';
		 $scope.editAddr.city='testing';
		 $scope.editAddr.state='sadadasd';
		 $scope.editAddr.phonenumber='7738233261';*/
         

		 $scope.editAddPOP=true;

		 $scope.states = [{
		 	id: 1,
		 	name: 'test1'
		 }, {
		 	id: 2,
		 	name: 'tes2'
		 }, {
		 	id: 3,
		 	name: 'test3'
		 }, {
		 	id: 4,
		 	name: 'test4'
		 }];

		 $scope.city = [{
		 	id: 1,
		 	name: 'city1'
		 }, {
		 	id: 2,
		 	name: 'city12'
		 }, {
		 	id: 3,
		 	name: 'city13'
		 }, {
		 	id: 4,
		 	name: 'city14'
		 }]


		 $scope.editsubmitForm=function()
		 	{	
		 		//alert('submitForm');
		 		
			}
		$scope.viewaddress=function()
			{
				craftsvillaService.getAddress()
				.success(function(response){
					console.log(response)
				})
			}	
		$scope.viewaddress();	
		 	
		 $scope.addnewsubmit=function()
		 	{	
		 		console.log($scope.addnewForm);
		 		

		 		if ($scope.addnewForm.$valid) {
					
					console.log($scope.addNew);

					var state=$scope.addnew.state;
					var fullname=$scope.addNew.fullname;
					var address=$scope.addNew.address;
					var pincode=$scope.addnew.pincode;
					var city=$scope.addnew.city;
					var state=$scope.addnew.state;
					var phonenumber=$scope.addnew.phonenumber;
					craftsvillaService.addAddress(state,fullname,address,pincode,city,state,phonenumber)
					.success(function()
						{
							console.log('sucessfull add');

						})

					.error (function()
						{
							console.log('Error');
						});	


			}

		 	}  		
				
         $scope.editaddressSave=function(){
         	console.log(editAddress);
         };

		

		// $scope.deliverAddress = function() {
		// 	//alert('Delivery Address Working');
		// 	craftsvillaService.updateQty(1234, 2546, 2);
		// };

		$scope.formclose=function(){
			console.log('working');
			$scope.editAddPOP = true;
		}

		$scope.shippingEdit=function(){
			console.log('Edit shipping Working');
			$scope.editAddPOP = false;
			if ($scope.DeditAddress) {
				console.log($scope.editAddr);
			}

		}
		$scope.deliverAddress=function(){
			console.log('Deliver to Address');
			craftsvillaService.loadQuote(1234, 2546)
			.success(function(response){
				console.log(response)
			});
			//alert('Deliver to Address');
		}
		$scope.shippadd=true;
		$scope.checkStatus=function(){
			if ($scope.chkStatus) {
				//alert('checked:show');
				$scope.showhideprop =false ;
				$scope.shippadd=true;
				
				}
			else 
				{
				//alert('unchecked: hide');
				$scope.showhideprop =true;
				$scope.shippadd=false;
				
				}
		};
		$scope.chkbill=true;
		$scope.checkBilling=function(){

		if ($scope.chkbill) {
				$scope.showbilling =false ;
				}
			else 
				{
				$scope.showbilling =true;
				}
		};


		$scope.chkStatus=true;
		$scope.initshipping=function(){
			
		}
	}]);
});