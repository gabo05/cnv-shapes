var canvasController = function($scope, canvasFactory, drawingFactory, shapesFactory){
    
    $scope.tools = {
        line: {
            name: 'line',
            init: function($event){
                var point = shapesFactory.createPoint($event);
                
                drawingFactory.setDrawing(true);
                canvasFactory.setStartingPoint(point);
                
                console.log('Drawing a line: '+JSON.stringify(point));
            },
            drag: function($event){
                if(drawingFactory.isDrawing()){
                    canvasFactory.clearAuxCanvas();

                    var ctx = canvasFactory.getCanvasAuxContext();
                    var endPoint = shapesFactory.createPoint($event);
                    var startPoint = canvasFactory.getStartingPoint();
                    
                    var line = shapesFactory.createLine(startPoint, endPoint);

                    drawingFactory.drawLine(ctx, line, false);

                    console.log('Line: drawing');
                }
            },
            drop: function($event){
                drawingFactory.setDrawing(false);
                canvasFactory.clearAuxCanvas();
                
                var ctx = canvasFactory.getCanvasContext();
                var endPoint = shapesFactory.createPoint($event);
                var startPoint = canvasFactory.getStartingPoint();
                
                var line = shapesFactory.createLine(startPoint, endPoint);
                
                drawingFactory.drawLine(ctx, line, false);
                
                console.log('Line drop');
            }
        },
        curve: {
            name: 'curve',
            init: function(){
                console.log('Drawing a curve');
            }
        },
        square: {
            name: 'square',
            init: function(){
                console.log('Drawing a square');
            }
        },
        fill_square: {
            name: 'fill_square',
            init: function(){
                console.log('Drawing a fill_square');
            }
        },
        circumference: {
            name: 'circumference',
            init: function(){
                console.log('Drawing a circumference');
            }
        },
        circle: {
            name: 'circle',
            init: function(){
                console.log('Drawing a circle');
            }
        },
        polygon: {
            name: 'polygon',
            init: function(){
                console.log('Drawing a polygon');
            }
        },
        fill_polygon: {
            name: 'fill_polygon',
            init: function(){
                console.log('Drawing a fill_polygon');
            }
        },
        free: {
            name: 'free',
            init: function(){
                console.log('Drawing a free');
            }
        },
        text: {
            name: 'text',
            init: function(){
                console.log('Drawing a text');
            }
        },
        brush: {
            name: 'brush',
            init: function(){
                console.log('Drawing a brush');
            }
        }
    };
};

