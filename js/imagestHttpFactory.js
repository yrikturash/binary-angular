//-------------- service for $http -----------------------------//
app.factory('imagestHttp', function($http) {
    return {
        getAlbums: function() {
            return $http.get('http://jsonplaceholder.typicode.com/photos');
        }
    };
});
