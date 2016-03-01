(function(){
    'use strict'
    
    var app = angular.module('cnvShapes', []);
    
    ///Providers
    app.provider('valuesProvider', valuesProvider);
    
    //Custom Directives
    app.directive('colorpicker', ['valuesProvider', colorpicker]);
    app.directive('toolboxItem', toolboxItem);
    app.directive('toolbox', toolbox);
    app.directive('lineSettings', ['valuesProvider', lineSettings]);
    app.directive('drawingArea', ['valuesProvider', drawingArea]);
    
    //Factories
    app.factory('canvasFactory', canvasFactory);
    app.factory('shapesFactory', ['valuesProvider',shapesFactory]);
    app.factory('drawingFactory', drawingFactory);
    
    //Services
    app.service('lineService', ['shapesFactory', 'canvasFactory', 'drawingFactory', 'valuesProvider', lineTool]);
    app.service('squareService', ['shapesFactory', 'canvasFactory', 'drawingFactory', 'valuesProvider', squareTool]);
    app.service('circleService', ['shapesFactory', 'canvasFactory', 'drawingFactory', 'valuesProvider', circleTool]);
    app.service('curveService', ['shapesFactory', 'canvasFactory', 'drawingFactory', 'valuesProvider', curveTool]);
    app.service('freeService', ['shapesFactory', 'canvasFactory', 'drawingFactory', 'valuesProvider', freeTool]);
    app.service('brushService', ['shapesFactory', 'canvasFactory', 'drawingFactory', 'valuesProvider', brushTool]);
    app.service('textService', ['shapesFactory', 'canvasFactory', 'drawingFactory', 'valuesProvider', textTool]);
    app.service('pencilService', ['shapesFactory', 'canvasFactory', 'drawingFactory', 'valuesProvider', pencilTool]);
    
    //Controllers
    app.controller('canvasController', ['$scope', 'canvasFactory', 'drawingFactory', 'shapesFactory', 'valuesProvider', 'lineService', 'brushService', 'circleService', 'freeService', 'squareService', 'curveService', 'pencilService', 'textService', canvasController]);
})();