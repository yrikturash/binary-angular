(function() {
    'use strict';
    angular.module('app').directive('ngPreview', function() {
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
})();