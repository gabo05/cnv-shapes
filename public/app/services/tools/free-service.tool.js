(function(app){
	app.service('freeService', ['shapesFactory', 'canvasFactory', 'drawingFactory', 'valuesFactory', function(shapesFactory, canvasFactory, drawingFactory, valuesFactory){
        this.name= 'free';
        this.init= function(point){
            canvasFactory.setStartingPoint(point);
            if(!drawingFactory.isDrawing()){

                drawingFactory.setDrawing(true);

                var initLine = shapesFactory.createLine(point, point);

                var ctx = canvasFactory.getCanvasContext();
                //var ctxaux = canvasFactory.getCanvasAuxContext();

                drawingFactory.beginPath(ctx, initLine);
                //drawingFactory.beginPath(ctxaux, initLine);

                console.log('Drawing a free');
            }
        };
        this.drag= function(point){
            if(drawingFactory.isDrawing()){
                canvasFactory.clearAuxCanvas();

                var ctx = canvasFactory.getCanvasAuxContext();

                var auxline = shapesFactory.createLine(canvasFactory.getStartingPoint(), point);

                drawingFactory.drawLine(ctx, auxline);
            }
        };
        this.drop= function(point){        
            canvasFactory.clearAuxCanvas();

            var ctx = canvasFactory.getCanvasContext();

            drawingFactory.drawPath(ctx, point);
        };
        this.end= function(point){
            drawingFactory.setDrawing(false);
            var ctx = canvasFactory.getCanvasContext();
            drawingFactory.endPath(ctx);
            console.log('end');
        };
    }]);
})(angular.module('cnvShapes'));