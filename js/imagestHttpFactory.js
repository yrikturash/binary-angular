//-------------- service for $http -----------------------------//
(function() {
    'use strict';	
	app.factory('imagestHttp', function($http) {
	    return {
	        getAlbums: function() {
	            return $http.get('http://jsonplaceholder.typicode.com/photos');
	        }
	    };
	});
})();
