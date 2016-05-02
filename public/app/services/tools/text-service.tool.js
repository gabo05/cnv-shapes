(function(app){
	app.service('textService', ['shapesFactory', 'canvasFactory', 'drawingFactory', 'valuesFactory', function(shapesFactory, canvasFactory, drawingFactory, valuesFactory){
        this.name = 'text';
        this.init= function(point){
        };
        this.drag= function(point){
        };
        this.drop= function(point){
        };
        this.end= function(point){
        }
    }]);
})(angular.module('cnvShapes'));