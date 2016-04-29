define(['./index'], function(controllers) {
    'use strict';
    controllers.controller('shippingCtrl', ['$scope', '$state', 'craftsvillaService', function($scope, $state, craftsvillaService) {
        //Variables
        $scope.addNew = {};
        $scope.billingID = null;
        $scope.shippingID = null;
        $scope.popupEditAddress = true;
        $scope.displayAddress = true;
        $scope.displayAddresscheckbox = false;
        $scope.addBilingaddreshideshow = true;
        $scope.chkStatusBilling = true;
        $scope.mform = false;
        $scope.selectedBillingID = null;
        $scope.selectedShippingID = null;
        $scope.shipping = {};
        $scope.noshippingSelected = false;
        $scope.addressExists = false;
        $scope.citystateWait = false;
        $scope.tempBilling = null;
        $scope.tempShipping = null;
        $scope.everChanged = false;

        // All Functions

        /*----Fetech Country---*/

        $scope.fetchCountries = function() {
            $scope.currentCountries;

            craftsvillaService.getCountry()
                .success(function(response) {
                    console.log(response);
                    $scope.countries = response.d;
                    console.log($scope.countries[0])
                    $scope.addnewcountry_shipping = $scope.countries[0];
                })

        }

        //Icon Edit popup view
        $scope.shippingEdit = function(address) {
                console.log(address);
                $scope.popupEditAddress = false;
                $scope.editAddr = angular.copy(address);
                $scope.editAddr.postcode = +$scope.editAddr.postcode;
                $scope.editAddr.telephone = +$scope.editAddr.telephone;

                if ($scope.DeseditaddrForm) {
                    //alert('Edit Address');
                    console.log($scope.editAddr);

                }

            }
            //Edit popup form close
        $scope.formclose = function() {
            console.log('working');
            $scope.popupEditAddress = true;
        };

        $scope.checkSameOrNot = function(addId, chkStatus) {
            console.log(addId, chkStatus)
            $scope.shippingID = addId;

            if ($scope.chkStatus == true) {
                $scope.billingID = addId;
            }
        }

        //Checkbox view address hide address
        $scope.checkStatus = function(value) {
            console.log(value);
            if (value) {
                $scope.everChanged = !$scope.everChanged;
                console.log('checked:show');
                $scope.displayAddress = true;
                $scope.displayAddresscheckbox = false;
                $scope.selectedShippingID = $scope.shippingID;
                $scope.billingID = $scope.selectedShippingID;
                console.log("billing:" + $scope.billingID)
                $scope.tempBilling = $scope.billingID;
                $scope.tempShipping = $scope.shippingID;
                if ($scope.noshippingSelected)
                    $scope.noshippingSelected = !$scope.noshippingSelected;
            } else {
                $scope.everChanged = !$scope.everChanged;
                console.log('checked:hide');
                $scope.selectedShippingID = $scope.shippingID;
                console.log("**** ---- ***");
                console.log($scope.selectedShippingID);
                $scope.billingID = null;
                console.log($scope.billingID);
                console.log("billing:" + $scope.billingID)
                $scope.tempBilling = null;
                $scope.tempShipping = $scope.shippingID;
                $scope.displayAddress = false;
                $scope.displayAddresscheckbox = true;
            }
        };


        //$scope.checkMobileStatus=function(address){
        //  //$scope.selectedBillingID = addId;
        //
        //  if (address.chkStatus) {
        //   // alert('checked:show');
        //    $scope.displayAddress=true;
        //    $scope.selectedShippingID = $scope.shippingID;
        //
        //  }
        //  else
        //  {
        //    //alert('checked:hide');
        //    $scope.billingID = null;
        //    $scope.selectedShippingID = $scope.shippingID;
        //    console.log("^^^^^^");
        //    console.log($scope.selectedShippingID);
        //    $scope.displayAddress=false;
        //    $scope.displayAddresscheckbox=true;
        //
        //  }
        //  address.chkStatus = address.chkStatus;
        //};

        $scope.checkStatusBilling = function() {
            if ($scope.chkStatusBilling) {
                //alert('checked:show');
                $scope.addBilingaddreshideshow = true;

            } else {
                //alert('unchecked: hide');
                $scope.addBilingaddreshideshow = false;


            }
        }

        //add data
        $scope.addnewsubmit = function(chkStatusBilling) {
            if ($scope.addnewForm.$valid) {
                if (chkStatusBilling == true) {
                    $scope.shipping.isSame = 1;
                    $scope.shipping.countryName = $scope.addnewcountry.country_name;
                    console.log($scope.shipping)
                    $scope.shipping.pincode = $scope.shipping.postcode;
                    craftsvillaService.addAddress($scope.shipping, $scope.shipping)
                        .success(function(response) {
                            craftsvillaService.getAddress()
                                .success(function(response) {
                                    if (response.s == 1) {
                                        $scope.addressProceed();
                                    }
                                })
                                .error(function(error) {
                                    console.log(error);

                                });

                        })

                    .error(function(error) {
                        console.log('Error');
                    });
                }
            }
        };


        //Edit address
        $scope.changePincode = function(postcode) {
                console.log($scope.addnewcountry.country_name)
                if ($scope.addnewcountry.country_name == "India") {
                    $scope.citystateWait = true;

                    craftsvillaService.getAddressFromPincode(postcode)
                        .success(function(response) {
                            $scope.citystateWait = false;
                            console.log(response);
                            if (response.s == 1) {
                                $scope.shipping.city = response.d[0].city;
                                $scope.shipping.state = response.d[0].state;
                                $scope.editAddr.region = response.d[0].state;


                            }
                        })
                        .error(function(error) {
                            console.log('Error');
                        });
                }
            }
            //Edit address
        $scope.changePincodeMobile = function(postcode) {
            console.log($scope.addnewcountry.country_name)
            if ($scope.addnewcountry.country_name == "India") {
                $scope.citystateWait = true;

                craftsvillaService.getAddressFromPincode(postcode)
                    .success(function(response) {
                        $scope.citystateWait = false;
                        console.log(response);
                        if (response.s == 1) {
                            $scope.editAddr.city = response.d[0].city;
                            $scope.editAddr.state = response.d[0].state;
                            $scope.editAddr.region = response.d[0].state;

                        }
                    })
                    .error(function(error) {
                        console.log('Error');
                    });
            }
        }
        $scope.changePincodeBilling = function(postcode) {
            console.log("&&&&& ----- -&&&&&")
            console.log($scope.addnewcountry.country_name)
            if ($scope.addnewcountry.country_name == "India")
                craftsvillaService.getAddressFromPincode(postcode)
                .success(function(response) {
                    console.log(response);
                    if (response.s == 1) {
                        $scope.addNewBilling.city = response.d[0].city;
                        $scope.addNewBilling.state = response.d[0].state;

                    } else {}

                })

            .error(function(error) {
                console.log('Error');
            });

        }

        //Edit address
        $scope.editsubmitForm = function() {
            //alert("saefgs")

            console.log($scope.editAddr);


            var addId = $scope.editAddr.entity_id;
            var firstname = $scope.editAddr.firstname;
            var lastname = $scope.editAddr.lastname;
            var _address = $scope.editAddr.street;
            var postcode = $scope.editAddr.postcode;
            var city = $scope.editAddr.city;
            var country = $scope.editAddr.country;
            var state = $scope.editAddr.region;
            var phonenumber = $scope.editAddr.telephone;
            craftsvillaService.updateAddress(firstname, lastname, _address, city, state, postcode, country, phonenumber, addId)
                .success(function(response) {
                    console.log(response);
                    if (response.s == 0) {

                    } else {
                        $scope.formclose();
                        $scope.viewaddress();
                    }


                })

            .error(function(error) {
                console.log('Error');
            });





        };





        $scope.viewaddress = function() {
            craftsvillaService.getAddress()
                .success(function(response) {
                    if (response.s == 1) {
                        $scope.addressExists = true;
                        console.log("***********")
                        console.log(response)
                        console.log("**********")

                        $scope.addresses = response.d;
                        console.log($scope.addresses)
                            //$scope.addnewsubmit($scope.addresses[0]);
                        $scope.shippingID = $scope.addresses[0].entity_id;
                        $scope.billingID = $scope.addresses[0].entity_id;
                    } else {
                        $scope.mform = true;
                        $scope.noresponse = true;
                    }
                })
                .error(function(error) {
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

        $scope.addnewsubmitBilling = function(address, chkStatusBilling) {

            var fullname = $scope.addNewBilling.fullname;
            var address = $scope.addNewBilling.address;
            var postcode = $scope.addNewBilling.postcode;
            var city = $scope.addNewBilling.city;
            var state = $scope.addNewBilling.state;
            var phonenumber = $scope.addNewBilling.phonenumber;
            $scope.shipping.countryName = $scope.addnewcountry.country_name;
            $scope.addNewBilling.countryName = $scope.addnewcountry.country_name;
            craftsvillaService.addAddress($scope.shipping, $scope.addNewBilling)
                .success(function(response) {
                    if (response.s == 1) {
                        $scope.addressProceed();
                    }

                })

            .error(function(error) {
                console.log('Error');
            });



        }

        $scope.editaddressSave = function() {
            console.log(addNewBilling);
        };



        // $scope.deliverAddress = function() {
        //  //alert('Delivery Address Working');
        //  craftsvillaService.updateQty(1234, 2546, 2);
        // };








        $scope.chkbill = true;
        $scope.checkBilling = function() {

            if ($scope.chkbill) {
                $scope.showbilling = false;
            } else {
                $scope.showbilling = true;
            }
        };


        $scope.chkStatus = true;



        // $scope.setBoth=function(){
        //  console.log('setBoth ');
        // }

        // $scope.setShippingID=function(addId){
        //  console.log('setShippingID ');
        // }

        $scope.setbillingID = function(addId) {
            $scope.billingID = addId;
            $scope.tempBilling = addId;
            console.log($scope.billingID, $scope.tempBilling)
            $scope.noshippingSelected = false;
        }

        $scope.addressProceed = function() {
            $state.go('payment', {
                platform: 'web'
            });
        }

        $scope.proceed = function() {
            var goahead = false;
            if(typeof dataLayer != "undefined") {
                dataLayer.push({'event':'TappedButtonEvent','eventName':'TappedButton','type':'ConfirmedAnAddress'});
            }
            console.log($scope.billingID, $scope.shippingID, $scope.tempBilling, $scope.tempShipping)

            if ($scope.everChanged == false) {
                console.log("yes 1st")
                if ($scope.billingID !== null && $scope.shippingID !== null)
                    goahead = true;
            } else {
                console.log(" 2nd")
                if ($scope.billingID !== null && $scope.shippingID !== null && $scope.tempBilling !== null)
                    goahead = true;
            }


            console.log("everchange", $scope.everChanged)
            console.log("checkstatus", $scope.chkStatus)
            console.log("tempBilling", $scope.tempBilling)
            console.log($scope.billingID, $scope.shippingID, $scope.tempBilling, $scope.chkStatus)

            if (goahead) {
                $scope.proceedToPaymentLoader=true;
                $scope.deliverToAddress = true;
                craftsvillaService.assignAddressToQuote($scope.billingID, $scope.shippingID)
                    .success(function(response) {
                        $scope.deliverToAddress = false;
                        if (response.s == 1) {
                            $scope.proceedToPaymentLoader=false;
                            $state.go('payment', {
                                platform: 'web'
                            });
                        } else {
                            //alert(response.m)
                        }

                    })
                    .error(function(error) {
                        $scope.proceedToPaymentLoader=false;
                        console.log(error);
                        $scope.deliverToAddress = false;
                    });
            } else {
                $scope.noshippingSelected = true;
            }

        }


        $scope.MaddnewAddress = function() {

            $scope.mform = !$scope.mform;
            console.log($scope.mform);
        };
        $scope.addressTracker =function() {
            if(typeof _satellite != "undefined") {
                digitalData.page={
                  pageInfo:{
                    pageName:"shipping address",
                  },
                  category:{
                    pageType:"shipping",
                    primaryCategory: "shipping",
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

        $scope.initshipping = function() {
            $scope.viewaddress();
            $scope.fetchCountries();
            $scope.addressTracker();
            $scope.scrollToTop();
            $scope.addressTracker();

        }
        $scope.initshipping();
    }]);
});
