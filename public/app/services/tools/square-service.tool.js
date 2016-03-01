var squareTool = function(shapesFactory, canvasFactory, drawingFactory, valuesProvider){
    this.name= 'square';
    this.init= function(point){
        drawingFactory.setDrawing(true);
        canvasFactory.setStartingPoint(point);

        console.log('Drawing a square: '+JSON.stringify(point));
    };
    this.drag= function(point){
        if(drawingFactory.isDrawing()){
            canvasFactory.clearAuxCanvas();

            var ctx = canvasFactory.getCanvasAuxContext();
            var startPoint = canvasFactory.getStartingPoint();

            var width = point.x - startPoint.x;
            var heigth = point.y - startPoint.y;

            var rect = shapesFactory.createRect(startPoint, width, heigth)

            drawingFactory.drawRect(ctx, rect, false);

            console.log('Line: drawing');
        }
    };
    this.drop = function(point){
        drawingFactory.setDrawing(false);
        canvasFactory.clearAuxCanvas();

        var ctx = canvasFactory.getCanvasContext();
        var startPoint = canvasFactory.getStartingPoint();

        var width = point.x - startPoint.x;
        var height = point.y - startPoint.y;

        var rect = shapesFactory.createRect(startPoint, width, height);

        drawingFactory.drawRect(ctx, rect, false);

        console.log('Rect drop');
    };
};