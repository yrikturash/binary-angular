
//-------------- service for $resource -----------------------------//
(function() {
    'use strict';	
	angular.module('app').factory('imagesResource', function($resource) {
	    return $resource('http://jsonplaceholder.typicode.com/photos/', {
	    }, {
	        get: {
	            method: 'get',
	            isArray: true
	        }
	    });
	});
})();
