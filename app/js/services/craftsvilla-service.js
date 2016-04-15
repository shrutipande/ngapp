define(['./index'], function (services) {
  'use strict';
  // expand input and show post button on focus
  services.service('craftsvillaService', ['$http','HOST', function($http,HOST) {

    return {


      postQuote: postQuote,
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
      paymentRedirect: paymentRedirect
    };

    //////////////////////////////////////////

  //cart page

    function loadQuote(customerId, quoteId) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/loadQuote',
      {
        "customerId": customerId,
        "quoteId": quoteId
      }
      );
    }

    function updateQty(productId, quoteId, productQty) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/updateQty', {
        "productId": productId,
        "quoteId": quoteId,
        "productQty": productQty
      });
    }

      //remove items
    function removeQuoteItems(productIdArrayObj, quoteId) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/removeQuoteItems', {
        "productIds":productIdArrayObj,
        "quoteId": quoteId
      });
    }

    function addNoteToSeller(productId, quoteId, comment) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/addNoteToSeller', {
        "productId": productId,
        "quoteId": quoteId,
        "comment": comment
      });
    }

    function updateNoteToSeller(productId, quoteId, comment) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/updateNoteToSeller', {
        "productId": productId,
        "quoteId": quoteId,
        "comment": comment
      });
    }

    function removeNoteToSeller(productId, quoteId) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/removeNoteToSeller', {
        "productId": productId,
        "quoteId": quoteId
      });
    }

    function applyCoupon(couponCode, quoteId) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/applyCoupon', {
        "couponCode": couponCode,
        "quoteId": quoteId
      });
    }

    function removeCoupon(couponCode, quoteId) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/removeCoupon', {
        "couponCode": couponCode,
        "quoteId": quoteId
      });
    }

      // undo remove from cart
    function addToQuote(productId, qty, quoteId) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/addToQuote', {
        "productId": productId,
        "qty": qty,
        "quoteId": quoteId
      });
    }

  //cart page ends

  //login page

    function getLogin(emailId, password) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/getLogin', {
        "emailId": emailId,
        "password": password
      });
    }

    function forgotPassword(emailId) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/forgotPassword', {
        "emailId" : emailId
      });
    }

  //login page ends


  //register page

    function getRegister(firstName, lastName, emailId, phoneNo, password) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/getRegister', {
        "firstName" : firstName,
        "lastName" : lastName,
        "emailId" : emailId,
        "phoneNo" : phoneNo,
        "password" : password
      });
    }

  //register page ends

  //logout

    function getLogout(customerId) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/getLogout', {
        "customerId" : customerId
      });
    }

  //logout ends


  //shipping page

    function getAddress(customerId) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/getAddress', {
        "customerId": customerId
      });
    }

    function assignAddressToQuote(billingId, shippingId) {
      return $http.post('http://dev7.craftsvilla.com/checkoutService/index/assignAddressToQuote', {
        "billingId": billingId,
        "shippingId": shippingId
      });
    }

    function updateAddress(customerId, name, address1, address2, city, state, pincode, country, phoneNo, isBillingAddress, addressId) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/updateAddress', {
        "customerId" : customerId,
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
      return $http.get('https://securelocal.craftsvilla.com/checkoutService/index/getCountry');
    }

    function addAddress(customerId, name, address1, address2, city, state, pincode, country, phoneNo, isBillingAddress) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/addAddress', {
        "customerId" : customerId,
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
      })
    }

    function paymentRedirect(url, json) {
      return $http({
        method: 'POST',
        url: url,
        data: json
      })
    }

  }]);
});
