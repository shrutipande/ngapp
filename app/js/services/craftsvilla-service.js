define(['./index'], function (services) {
  'use strict';
  // expand input and show post button on focus
  services.service('craftsvillaService', ['$http','HOST', function($http,HOST) {

    return {

      getProducts: getProducts,
      getProductById: getProductById,
      postQuote: postQuote
      //createOffer: createOffer,
      //editOffer: editOffer,
      //deactivateOffer: deactivateOffer,
      //activateOffer: activateOffer,
      //removeOfferUser: removeOfferUser,
      //editLimitUser: editLimitUser,
      //addOfferUser: addOfferUser,
      //removeOffer: removeOffer,
      //addApology: addApology,
      //getApologyOffer: getApologyOffer,
      //getPendingApology: getPendingApology,
      //getApprovedApology: getApprovedApology,
      //approveApology: approveApology,
      //disApproveApology: disApproveApology,
      //createApologyRequest: createApologyRequest,
      //sendApologySMS: sendApologySMS
    };

    //////////////////////////////////////////

    function getProducts() {
      return $http.get(HOST + '2tc8u');
    }

    function getProductById() {
      return $http.get(HOST + '1lyle');
    }

    function getProductPost (id, xyz) {
      return $http.post(HOST + '1lyle', {

      });
    }

    function postQuote (customerId, quoteId) {
      return $http.post('https://securelocal.craftsvilla.com/checkoutService/index/loadQuote', {
        customerId: customerId,
        quoteId: quoteId
      });
    }



  }]);
});