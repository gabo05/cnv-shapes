(function(app){
	app.service('lineService', ['shapesFactory', 'canvasFactory', 'drawingFactory', 'valuesFactory', function(shapesFactory, canvasFactory, drawingFactory, valuesFactory){
        this.name = 'line';
        this.init= function(point){
            
            drawingFactory.setDrawing(true);
            canvasFactory.setStartingPoint(point);

            console.log('Drawing a line: '+JSON.stringify(point));
        };
        this.drag= function(point){
            if(drawingFactory.isDrawing()){
                canvasFactory.clearAuxCanvas();

                var ctx = canvasFactory.getCanvasAuxContext();

                var startPoint = canvasFactory.getStartingPoint();

                var line = shapesFactory.createLine(startPoint, point);

                drawingFactory.drawLine(ctx, line, false);

                console.log('Line: drawing');
            }
        };
        this.drop= function(point){
            drawingFactory.setDrawing(false);
            canvasFactory.clearAuxCanvas();

            var ctx = canvasFactory.getCanvasContext();

            var startPoint = canvasFactory.getStartingPoint();

            var line = shapesFactory.createLine(startPoint, point);

            drawingFactory.drawLine(ctx, line, false);

            console.log('Line drop');
        }
    }]);
})(angular.module('cnvShapes'));