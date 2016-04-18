define(['./index'], function (services) {
  'use strict';
  // expand input and show post button on focus
  services.service('craftsvillaService', ['$http','HOST', function($http,HOST) {

    return {
      getCartData: getCartData,
      getApplyCoupon : getApplyCoupon,
      getRemoveCoupon: getRemoveCoupon,
      getProducts: getProducts,
      getProductById: getProductById,
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
      loadFinalQuote : loadFinalQuote
    };

    //////////////////////////////////////////


    function getCartData(){
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

    }

    //demo apis ends here

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
    function removeQuoteItems(productIdArrayObj) {
      return $http.post( HOST + 'checkoutService/index/removeQuoteItems', {
        "productIds":productIdArrayObj
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
      return $http.post( HOST + 'checkoutService/index/applyCoupon', {
        "couponCode": couponCode
      });
    }

    function removeCoupon(couponCode) {
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
    function loadFinalQuote() {
      return $http.get( HOST + 'checkoutService/index/loadFinalQuote');
    }
  //final quote ends




  //shipping page

    function getAddress() {
      return $http.get( HOST + 'checkoutService/index/getAddress');
    }

    function assignAddressToQuote(billingId, shippingId) {
      return $http.post( HOST + 'checkoutService/index/assignAddressToQuote', {
        "billingId": billingId,
        "shippingId": shippingId
      });
    }

    function updateAddress(name, address1, address2, city, state, pincode, country, phoneNo, isBillingAddress, addressId) {
      return $http.post( HOST + 'checkoutService/index/updateAddress', {
        "name" : name,
        "address1" : address1,
        "address2" : address2,
        "city" : city,
        "state" : state,
        "pincode" : pincode,
        "country" : country,
        "phoneNo" : phoneNo,
        "isBillingAddress": isBillingAddress,
        "addressId": addressId
      });
    }

    function getCountry() {
      return $http.get( HOST + 'checkoutService/index/getCountry');
    }

    function addAddress(name, address1, address2, city, state, pincode, country, phoneNo, isBillingAddress) {
      return $http.post( HOST + 'checkoutService/index/addAddress', {
        "name" : name,
        "address1" : address1,
        "address2" : address2,
        "city" : city,
        "state" : state,
        "pincode" : pincode,
        "country" : country,
        "phoneNo" : phoneNo,
        "isBillingAddress": isBillingAddress
      });
    }

  //shipping page ends

  //payment methods

    function getPaymentMethods() {
      return $http.get('http://dev7.craftsvilla.com/checkoutService/index/getPaymentMethods');
    }

  //payment methods ends

    function postQuote (customerId, quoteId) {
      return $http.post('http://local.craftsvilla.com/checkoutService/index/loadQuote', {
        customerId: customerId,
        quoteId: quoteId
      });
    }

    // Place order (Prepaid)
    function placeOrder(json) {
      return $http({
        method: 'GET',
        url: 'http://dev7.craftsvilla.com/checkoutService/index/placeOrderPrepaid',
        params: json
      });
    }

    function paymentRedirect(url, json) {
      return $http({
        method: 'POST',
        url: url,
        data: json
      });
    }
  }]);
});
