var brushTool = function(shapesFactory, canvasFactory, drawingFactory, valuesProvider){
    this.name = 'brush';
    this.init = function(point){
        drawingFactory.setDrawing(true);
    };
    this.drag = function(point){
        if(drawingFactory.isDrawing()){
            
            var ctx = canvasFactory.getCanvasContext();
            var radio = valuesProvider.getValue('lineWidth');
            var angle = Math.PI*2;
            var circle = shapesFactory.createArc(point, radio, angle, true)

            drawingFactory.drawArc(ctx, circle);
        }
    };
    this.drop= function(point){
        drawingFactory.setDrawing(false);
    };
}