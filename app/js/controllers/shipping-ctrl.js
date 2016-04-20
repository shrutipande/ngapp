define(['./index'], function (controllers) {
  'use strict';
  controllers.controller('shippingCtrl', ['$scope','$state','craftsvillaService', function ($scope, $state, craftsvillaService) {

    //Variables
    $scope.addNew ={};
    $scope.billingID = null;
    $scope.shippingID =null;
    $scope.popupEditAddress=true;
    $scope.displayAddress=true;
    $scope.displayAddresscheckbox=false;
    $scope.addBilingaddreshideshow=true;
    $scope.chkStatusBilling = true;
    $scope.mform = false;
    $scope.selectedBillingID = null;
    $scope.selectedShippingID = null;
    $scope.shipping ={};
    $scope.noshippingSelected=false;
    $scope.addressExists = false;
    // All Functions

    /*----Fetech Country---*/

    $scope.fetchCountries=function()
    {
      $scope.currentCountries;

      craftsvillaService.getCountry()
          .success(function(response){
            console.log(response);
            $scope.countries = response.d;
            console.log($scope.countries[0])
            $scope.addnewcountry = $scope.countries[0];
          })

    }

    //Icon Edit popup view
    $scope.shippingEdit=function(address){
      console.log(address);
      $scope.popupEditAddress=false;
      $scope.editAddr = angular.copy(address);
      if ($scope.DeseditaddrForm) {
        //alert('Edit Address');
        console.log($scope.editAddr);

      }

    }
    //Edit popup form close
    $scope.formclose=function(){
      console.log('working');
      $scope.popupEditAddress = true;
    };

    //Checkbox view address hide address
    $scope.checkStatus=function(){
      //$scope.selectedBillingID = addId;

      if ($scope.chkStatus) {
        //alert('checked:show');
        $scope.displayAddress=false;
        $scope.selectedShippingID = $scope.shippingID;

      }
      else
      {
        $scope.billingID = null;
        $scope.selectedShippingID = $scope.shippingID;
        console.log(")))))))))((((((((((");
        console.log($scope.selectedShippingID);
        $scope.displayAddress=false;
        $scope.displayAddresscheckbox=true;

      }
    };

    $scope.checkStatusBilling=function(){
      if ($scope.chkStatusBilling) {
        //alert('checked:show');
        $scope.addBilingaddreshideshow=true;

      }
      else
      {
        //alert('unchecked: hide');
        $scope.addBilingaddreshideshow=false;


      }
    }

    //add data
    $scope.addnewsubmit = function(chkStatusBilling) {
      if (chkStatusBilling == true) {
        $scope.shipping.countryName = $scope.addnewcountry.country_name;
        craftsvillaService.addAddress($scope.shipping, $scope.shipping)
            .success(function (response) {
              craftsvillaService.getAddress()
                  .success(function (response) {
                    if (response.s ==1) {
                      $scope.addressProceed();
                    }
                    else
                      alert(response.m)
                  })
                  .error(function (error) {
                    console.log(error);

                  });

            })

            .error (function (error) {
              console.log('Error');
            });
      }
    };


    //Edit address
    $scope.changePincode = function(pincode){
      console.log($scope.addnewcountry.country_name)
      if ($scope.addnewcountry.country_name == "India")
        craftsvillaService.getAddressFromPincode(pincode)
            .success(function(response)
            {
              console.log(response);
              if (response.s == 1 )
              {
                $scope.shipping.city = response.d[0].city;
                $scope.shipping.state = response.d[0].state;

              }
            })
            .error (function(error)
            {
              console.log('Error');
            });

    }

    $scope.changePincodeBilling = function(pincode){
      console.log("&&&&& ----- -&&&&&")
      console.log($scope.addnewcountry.country_name)
      if ($scope.addnewcountry.country_name == "India")
        craftsvillaService.getAddressFromPincode(pincode)
            .success(function(response)
            {
              console.log(response);
              if (response.s == 1 )
              {
                $scope.addNewBilling.city = response.d[0].city;
                $scope.addNewBilling.state = response.d[0].state;

              }
              else{
              }

            })

            .error (function(error)
            {
              console.log('Error');
            });

    }

    //Edit address
    $scope.editsubmitForm = function(){
      //alert("saefgs")

      console.log($scope.editAddr);


      var addId=$scope.editAddr.entity_id;
      var firstname=$scope.editAddr.firstname;
      var lastname=$scope.editAddr.lastname;
      var _address=$scope.editAddr.street;
      var pincode=$scope.editAddr.postcode;
      var city=$scope.editAddr.city;
      var country=$scope.editAddr.country;
      var state=$scope.editAddr.region;
      var phonenumber=$scope.editAddr.telephone;
      craftsvillaService.updateAddress(firstname,lastname,_address,city,state,pincode,country,phonenumber,addId)
          .success(function(response)
          {
            console.log(response);
            if (response.s == 0 )
            {

            }
            else{
              $scope.formclose();
              $scope.viewaddress();
            }


          })

          .error (function(error)
          {
            console.log('Error');
          });





    };





    $scope.viewaddress=function()
    {
      craftsvillaService.getAddress()
          .success(function(response){
            if (response.s ==1)
              $scope.addressExists = true;
            console.log("***********")
            console.log(response)
            console.log("**********")

            $scope.addresses = response.d;
            console.log($scope.addresses)
            //$scope.addnewsubmit($scope.addresses[0]);
            $scope.shippingID = $scope.addresses[0].entity_id;
            $scope.billingID = $scope.addresses[0].entity_id;
          })
          .error(function(error){
            console.log(error);

          });
    }


    /*$scope.checkStatus=function(){
     $scope.billingID =null;
     angular.forEach($scope.addresses, function(value, key) {
     this.push(key + ': ' + value);
     });

     if ($scope.chkStatus) {
     alert('checked:show');
     $scope.showhideprop =false ;
     $scope.shippadd=true;
     $scope.billingAddress=true;

     }
     else
     {
     alert('unchecked: hide');
     $scope.showhideprop =true;
     $scope.shippadd=false;
     $scope.billingAddress=false;

     }
     };*/


    //$scope.deliveryAddress=function(address){
    //  console.log(address);
    //  $scope.billingID = address.entity_id
    //  craftsvillaService.assignAddressToQuote($scope.billingID, 2546)
    //      .success(function(response){
    //            console.log(response)
    //          }
    //      );
    //
    //}

    $scope.addnewsubmitBilling=function(address, chkStatusBilling)
    {

      var fullname=$scope.addNewBilling.fullname;
      var address=$scope.addNewBilling.address;
      var pincode=$scope.addNewBilling.pincode;
      var city=$scope.addNewBilling.city;
      var state=$scope.addNewBilling.state;
      var phonenumber=$scope.addNewBilling.phonenumber;
      $scope.shipping.countryName = $scope.addnewcountry.country_name;
      $scope.addNewBilling.countryName = $scope.addnewcountry.country_name;
      craftsvillaService.addAddress($scope.shipping, $scope.addNewBilling)
          .success(function(response)
          {
            if (response.s ==1) {
              $scope.addressProceed();
            }
            else
              alert(response.m)

          })

          .error (function(error)
          {
            console.log('Error');
          });



    }

    $scope.editaddressSave=function(){
      console.log(addNewBilling);
    };



    // $scope.deliverAddress = function() {
    // 	//alert('Delivery Address Working');
    // 	craftsvillaService.updateQty(1234, 2546, 2);
    // };








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

    $scope.checkSameOrNot=function(addId){
      $scope.shippingID = addId;

      if ($scope.chkStatus == true)
      {
        $scope.billingID = addId;
      }
    }

    // $scope.setBoth=function(){
    // 	console.log('setBoth ');
    // }

    // $scope.setShippingID=function(addId){
    // 	console.log('setShippingID ');
    // }

    $scope.setbillingID=function(addId){
      $scope.billingID = addId;
      $scope.noshippingSelected=false;
    }

    $scope.addressProceed=function(){
      $state.go('payment');
    }

    $scope.proceed=function(){
      console.log($scope.billingID,$scope.shippingID);
      if ($scope.billingID !==null && $scope.shippingID !==null){
        craftsvillaService.assignAddressToQuote($scope.billingID,$scope.shippingID)
            .success(function(response)
            {
              if(response.s == 1){
                $state.go('payment');
              }
              else{
                //alert(response.m)
              }

            })
            .error (function(error)
            {
              console.log('Error');
            });
      }
      else {
        $scope.noshippingSelected=true;
      }

    }


    $scope.MaddnewAddress=function(){

      $scope.mform= !$scope.mform;
      console.log($scope.mform);
    };


    $scope.initshipping=function(){
      $scope.viewaddress();
      $scope.fetchCountries();

    }
    $scope.initshipping();
  }]);
});