
//-------------- service for $resource -----------------------------//
app.factory('imagesResource', function($resource) {
    return $resource('http://jsonplaceholder.typicode.com/photos/', {
    }, {
        get: {
            method: 'get',
            isArray: true
        }
    });
});
