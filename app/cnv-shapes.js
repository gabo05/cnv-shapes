(function(){
    'use strict'
    
    var app = angular.module('cnvShapes', []);
    
    //Custom Directives
    app.directive('colorpicker', colorpicker);
    app.directive('toolboxItem', toolboxItem);
    app.directive('toolbox', toolbox);
    app.directive('lineSettings', lineSettings);
    
    //Controllers
    app.controller('canvasCtrl', canvasCtrl);
})();