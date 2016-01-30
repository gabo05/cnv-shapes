(function(){
    'use strict'
    
    var app = angular.module('cnvShapes', []);
    
    ///Providers
    app.provider('valuesProvider', valuesProvider);
    
    //Custom Directives
    app.directive('colorpicker', colorpicker);
    app.directive('toolboxItem', toolboxItem);
    app.directive('toolbox', toolbox);
    app.directive('lineSettings', lineSettings);
    app.directive('drawingArea', drawingArea);
    
    //Factories
    app.factory('canvasFactory', canvasFactory);
    app.factory('shapesFactory', shapesFactory);
    app.factory('drawingFactory', drawingFactory);
    
    //Controllers
    app.controller('canvasController', canvasController);
})();