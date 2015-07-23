//-------------- register module -----------------------------//

var app = angular.module('app', ['ngResource']);


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
