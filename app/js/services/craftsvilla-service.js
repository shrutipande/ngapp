define(['./index'], function (services) {
  'use strict';
  // expand input and show post button on focus
  services.service('craftsvillaService', ['$q', '$http', function($q, $http) {
    return {
      //apiPath: 'http://frontendapi-1576082100.ap-southeast-1.elb.amazonaws.com:9000/',
      apiPath: 'https://api.myjson.com/bins/2tc8u',
	    apiPath_2: 'https://api.myjson.com/bins/1lyle',

      getProducts: function(json) {
	      var deferred = $q.defer();

	      $http({
		      method: 'GET',
		      url: this.apiPath,
		      //data: json
	      })
	      .success(function (data) {
		      deferred.resolve(data);
	      })
	      .error(function (err, status) {
		      deferred.reject(err, status);
	      });

	      return deferred.promise;
      },

	    getProductById: function(id) {
		    var deferred = $q.defer();

		    $http({
			    method: 'GET',
			    url: this.apiPath_2,
			    //params: { productId: id }
		    })
		    .success(function (data) {
			    deferred.resolve(data);
		    })
		    .error(function (err, status) {
			    deferred.reject(err, status);
		    });

		    return deferred.promise;
	    }
    };
  }]);
});