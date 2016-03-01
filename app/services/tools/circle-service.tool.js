var circleTool = function(shapesFactory, canvasFactory, drawingFactory, valuesProvider){
    this.name= 'circle';
    this.init= function(point){
        
        drawingFactory.setDrawing(true);
        canvasFactory.setStartingPoint(point);

        console.log('Drawing a circle: '+JSON.stringify(point));
    };
    this.drag= function(point){
        if(drawingFactory.isDrawing()){
            canvasFactory.clearAuxCanvas();

            var ctx = canvasFactory.getCanvasAuxContext();
            var startPoint = canvasFactory.getStartingPoint();

            var x = point.x - startPoint.x;
            var y = point.y - startPoint.y;

            var radio = Math.sqrt(((x*x)+(y*y)));
            var angle = Math.PI*2;

            var arc = shapesFactory.createArc(startPoint, radio, angle)

            drawingFactory.drawArc(ctx, arc, false);

            console.log('Line: drawing');
        }
    };
    this.drop= function(point){
        drawingFactory.setDrawing(false);
        canvasFactory.clearAuxCanvas();

        var ctx = canvasFactory.getCanvasContext();
        var startPoint = canvasFactory.getStartingPoint();

        var x = point.x - startPoint.x;
        var y = point.y - startPoint.y;

        var radio = Math.sqrt(((x*x)+(y*y)));
        var angle = Math.PI*2;

        var arc = shapesFactory.createArc(startPoint, radio, angle)

        drawingFactory.drawArc(ctx, arc);

        console.log('Line: drawing');
    }
};