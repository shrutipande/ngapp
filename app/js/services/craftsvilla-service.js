define(['./index'], function (services) {
  'use strict';
  // expand input and show post button on focus
  services.service('craftsvillaService', ['$q', '$http', function($q, $http) {
    return {
      //apiPath: 'http://frontendapi-1576082100.ap-southeast-1.elb.amazonaws.com:9000/',
      apiPath: 'https://api.myjson.com/bins/2tc8u',

      getProducts: function(criteria) {
        var deferred = $q.defer();
        $http.get(this.apiPath).success(function(data) {
          console.log(data);
          deferred.resolve(data);
        }).error(function(err, status) {
          deferred.reject(err, status);
        });
        return deferred.promise;
      }
    };
  }]);
});