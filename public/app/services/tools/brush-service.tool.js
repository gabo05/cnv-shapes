(function(app){
	app.service('brushService', ['shapesFactory', 'canvasFactory', 'drawingFactory', 'valuesFactory', function(shapesFactory, canvasFactory, drawingFactory, valuesFactory){
        this.name = 'brush';
        this.init = function(point){
            drawingFactory.setDrawing(true);
        };
        this.drag = function(point){
            if(drawingFactory.isDrawing()){
                
                var ctx = canvasFactory.getCanvasContext();
                var radio = valuesFactory.getValue('lineWidth');
                var angle = Math.PI*2;
                var circle = shapesFactory.createArc(point, radio, angle, true)

                drawingFactory.drawArc(ctx, circle);
            }
        };
        this.drop= function(point){
            drawingFactory.setDrawing(false);
        };
    }]);
})(angular.module('cnvShapes'));