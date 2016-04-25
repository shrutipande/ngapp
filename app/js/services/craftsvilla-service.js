define(['./index'], function (services) {
  'use strict';
  // expand input and show post button on focus
  services.service('craftsvillaService', ['$http','HOST', function($http,HOST) {

    return {
      // getCartData: getCartData,
      loginCheck : loginCheck,
      // getApplyCoupon : getApplyCoupon,
      // getRemoveCoupon: getRemoveCoupon,
      // getProducts: getProducts,
      // getProductById: getProductById,
      loadQuote: loadQuote,
      updateQty: updateQty,
      addToQuote: addToQuote,
      removeQuoteItems: removeQuoteItems,
      addNoteToSeller: addNoteToSeller,
      updateNoteToSeller: updateNoteToSeller,
      removeNoteToSeller: removeNoteToSeller,
      applyCoupon: applyCoupon,
      removeCoupon: removeCoupon,
      getAddress : getAddress,
      getCountry : getCountry,
      addAddress : addAddress,
      assignAddressToQuote : assignAddressToQuote,
      updateAddress : updateAddress,
      getLogin : getLogin,
      getRegister : getRegister,
      forgotPassword : forgotPassword,
      getLogout : getLogout,
      getPaymentMethods : getPaymentMethods,
      placeOrder: placeOrder,
      paymentRedirect: paymentRedirect,
      continueAsGuest : continueAsGuest,
      loadFinalQuote : loadFinalQuote,
      placeOrderCOD: placeOrderCOD,
      getSuccessData:getSuccessData,
      getAddressFromPincode : getAddressFromPincode,
      socialAuth: socialAuth,
      getRecommendation: getRecommendation
    };

    //////////////////////////////////////////


    /*function getCartData(){
      return $http.get('https://api.myjson.com/bins/u3o4');
      //https://api.myjson.com/bins/36aj8
    }

    function getApplyCoupon(c) {
      return $http.get( 'https://api.myjson.com/bins/3md8k');
      //https://api.myjson.com/bins/22n2c
      //https://api.myjson.com/bins/3md8k
    }

    function getRemoveCoupon(c) {
      return $http.get( 'https://api.myjson.com/bins/2wv10');

    }*/

    //demo apis ends here
    function loginCheck () {
      return $http.get( HOST + 'checkoutService/index/loginCheck');
    }

    function loadQuote() {
      return $http.get( HOST + 'checkoutService/index/loadQuote');
    }

    function updateQty(productId, productQty) {
      return $http.post( HOST + 'checkoutService/index/updateQty', {
        "productId": productId,
        "productQty": productQty
      });
    }

      //remove items
    function removeQuoteItems(productIds) {
      return $http.post( HOST + 'checkoutService/index/removeQuoteItems', {
        "productIds": productIds
      });
    }

    function addNoteToSeller(productId, comment) {
      return $http.post( HOST + 'checkoutService/index/addNoteToSeller', {
        "productId": productId,
        "comment": comment
      });
    }


    function updateNoteToSeller(productId, comment) {
      return $http.post( HOST + 'checkoutService/index/updateNoteToSeller', {
        "productId": productId,
        "comment": comment
      });
    }

    function removeNoteToSeller(productId) {
      return $http.post( HOST + 'checkoutService/index/removeNoteToSeller', {
        "productId": productId
      });
    }

    function applyCoupon(couponCode) {
      console.log(couponCode);
      return $http.post( HOST + 'checkoutService/index/applyCoupon', {
        "couponCode" : couponCode
      });
    }

    function removeCoupon(couponCode) {
      console.log(couponCode);
      return $http.post( HOST + 'checkoutService/index/removeCoupon', {
        "couponCode": couponCode
      });
    }

      // undo remove from cart
    function addToQuote(productId, qty) {
      return $http.post( HOST + 'checkoutService/index/addToQuote', {
        "productId": productId,
        "qty": qty
      });
    }

  //cart page ends

  //login page

    function getLogin(emailId, password) {
      return $http.post( HOST + 'checkoutService/index/getLogin', {
        "emailId": emailId,
        "password": password
      });
    }

    function forgotPassword(emailId) {
      return $http.post( HOST + 'checkoutService/index/forgotPassword', {
        "emailId" : emailId
      });
    }

  //login page ends


  //register page

    function getRegister(firstName, lastName, emailId, phoneNo, password) {
      return $http.post( HOST + 'checkoutService/index/getRegister', {
        "firstName" : firstName,
        "lastName" : lastName,
        "emailId" : emailId,
        "phoneNo" : phoneNo,
        "password" : password
      });
    }

  //register page ends

  //logout

    function getLogout() {
      return $http.get( HOST + 'checkoutService/index/getLogout');
    }

  //logout ends

  //continue as guest
    function continueAsGuest(emailId) {
      return $http.post( HOST + 'checkoutService/index/continueAsGuest', {
        "customerEmail" : emailId
      });
    }
  //continue as guest ends

  //final quote
    function loadFinalQuote(platform, quoteId) {
      if(platform === 'web') {
        return $http.get( HOST + 'checkoutService/index/loadFinalQuote');
      }
      else {
        return $http({
          url: HOST + 'checkoutService/index/loadFinalQuote',
          method: 'POST',
          data: {
            quoteId: quoteId
          }
        });
      }
    }
  //final quote ends




  //shipping page

    function getAddress() {
      return $http.get( HOST + 'checkoutService/index/getAddress');
    }

    function getAddressFromPincode(pincode) {
      return $http.post( HOST + 'checkoutService/index/getAddressFromPincode', {
        "Pincode": pincode
      });
    }

    function assignAddressToQuote(billingId, shippingId) {
      return $http.post( HOST + 'checkoutService/index/assignAddressToQuote', {
        "billingId": billingId,
        "shippingId": shippingId
      });
    }

    function updateAddress(firstName,lastName, address1, city, state, pincode, country, phoneNo, addressId) {
      console.log(firstName,lastName, address1, city, state, pincode, country, phoneNo, addressId);
      return $http.post( HOST + 'checkoutService/index/updateAddress', {
        "firstName" : firstName,
        "lastName" : lastName,
        "address1" : address1,
        "city" : city,
        "state" : state,
        "pincode" : pincode,
        "country" : country,
        "phoneNo" : phoneNo,
        "addressId":addressId
      });
    }

    function getCountry() {
      return $http.get( HOST + 'checkoutService/index/getCountry');
    }

    function addAddress(shipping, billing) {
      console.log(shipping, billing);

      return $http.post( HOST + 'checkoutService/index/addAddress', {
        "shippingAddreess":{
          "firstName":shipping.firstName,
          "lastName":shipping.lastName,
          "address1":shipping.address1,
           "city":shipping.city,
          "state":shipping.state,
          "pincode":shipping.pincode,
          "country":shipping.countryName,
          "phoneNo":shipping.phoneNo
        },
        "billingAddreess":{
          "firstName":billing.firstName,
          "lastName":billing.lastName,
          "address1":billing.address1,
           "city":billing.city,
          "state":billing.state,
          "pincode":billing.pincode,
          "country":billing.countryName,
          "phoneNo":billing.phoneNo
        }
      });
    }
  //shipping page ends

  //payment methods

    function getPaymentMethods() {
      return $http.get(HOST + 'checkoutService/index/getPaymentMethods');
    }

  //payment methods ends

    function postQuote (customerId, quoteId) {
      return $http.post(HOST + 'checkoutService/index/loadQuote', {
        customerId: customerId,
        quoteId: quoteId
      });
    }
    // Place order (Prepaid)
    function placeOrder(json) {
      return $http({
        method: 'POST',
        url: HOST + 'checkoutService/index/placeOrderPrepaid',
        params: json
      });
    }

  //final quote
    function getSuccessData() {
      return $http.get( HOST + 'checkoutService/index/loadFinalQuote');
     //return $http.get( 'https://api.myjson.com/bins/3wu38');



    }


    function paymentRedirect(url, json) {
      return $http({
        method: 'POST',
        url: url,
        data: json
      });
    }

    function placeOrderCOD() {
      return $http({
        method: 'POST',
        url: HOST + 'checkoutService/index/placeOrderCOD'
      });
    }
    //final quote
    function getRecommendation() {
      return $http.get(HOST + 'checkoutService/index/getRecommendedProducts');
    }
    //final quote ends

    function socialAuth (json) {
      return $http({
        method: 'POST',
        url: HOST + 'checkoutService/index/socialLogin',
        data: json,
        withCredentials: true
      });
    }
  }]);

  services.service('Auth', ['$localStorage', function($localStorage) {
    return {
      isLoggedIn: function () {
        return $localStorage.loginData !== null && $localStorage.loginData !== undefined && $localStorage.loginData !== {};
      }
    }
  }]);
});
