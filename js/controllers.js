//-------------- register module -----------------------------//
var app = angular.module('app', ['ngResource']);

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

//-------------- service for $http -----------------------------//
app.factory('imagestHttp', function($http) {
    return {
        getAlbums: function() {
            return $http.get('http://jsonplaceholder.typicode.com/photos');
        }
    };
});

//-------------- main controller -----------------------------//
app.controller('WebService', function($http, imagestHttp, imagesResource) {
    var vm = this;

    /*---------------- get hundler ------------------*/
    getAlbumsSuccessHandler =
        function(response) {
            vm.photosArray = response.data.slice(0, 10);
        };

    /*---------------- get data by $http.get ------------------*/
    imagestHttp.getAlbums().then(getAlbumsSuccessHandler).catch(function(err) {
        console.log(err);
    });

    /*---------------- get data by $resource ------------------*/
    imagesResource.get().$promise.then(function(user) {
        vm.photosArray2 = user.slice(0, 10);
    });

});

app.directive('ngPreview', function() {
    return {
        link: function($scope, element, attrs) {
            element.bind('click', function() {

                var node = document.createElement("div");
                node.setAttribute('id', 'preview');
                node.setAttribute('onclick', 'this.remove()');
                var url = element.attr('url');

                var html = '<div id="preview-wrapper"><img src="' + url + '"    /></div>';

                node.innerHTML += html;
                document.getElementsByTagName("body")[0].appendChild(node);
            });
        }
    };
});