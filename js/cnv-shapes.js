(function(){
    'use strict'
    
    var app = angular.module('cnvShapes', []);
    
    app.directive('colorpicker', [ '$templateRequest', '$compile', colorpicker]);
    
})();