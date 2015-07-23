var app = angular.module('phonecatApp', []);

app.controller('PhoneListCtrl', function($http, images) {
	var vm = this;

	getAlbumsSuccess =
		function(response) {
			// console.log(response.data);
			vm.photosArray = response.data.slice(0, 10);


		};

	images.getAlbums().then(getAlbumsSuccess).catch(function(err) {
		console.log(err);
	})






});

//factory style, more involved but more sophisticated
app.factory('images', function($http) {

	var val = "hahaha";
	return {
		getAlbums: function() {
			return $http.get('http://jsonplaceholder.typicode.com/photos');
		},
		val: val
	};
});


