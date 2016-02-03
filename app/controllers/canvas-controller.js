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
                
            }
        },
        square: {
            name: 'square',
            init: function($event){
                var point = shapesFactory.createPoint($event);
                
                drawingFactory.setDrawing(true);
                canvasFactory.setStartingPoint(point);
                
                console.log('Drawing a square: '+JSON.stringify(point));
            },
            drag: function($event){
                if(drawingFactory.isDrawing()){
                    canvasFactory.clearAuxCanvas();

                    var ctx = canvasFactory.getCanvasAuxContext();
                    var endPoint = shapesFactory.createPoint($event);
                    var startPoint = canvasFactory.getStartingPoint();
                    
                    var width = endPoint.x - startPoint.x;
                    var heigth = endPoint.y - startPoint.y;
                    
                    var rect = shapesFactory.createRect(startPoint, width, heigth)

                    drawingFactory.drawRect(ctx, rect, false);

                    console.log('Line: drawing');
                }
            },
            drop: function($event){
                drawingFactory.setDrawing(false);
                canvasFactory.clearAuxCanvas();
                
                var ctx = canvasFactory.getCanvasContext();
                var endPoint = shapesFactory.createPoint($event);
                var startPoint = canvasFactory.getStartingPoint();
                
                var width = endPoint.x - startPoint.x;
                var height = endPoint.y - startPoint.y;
                
                var rect = shapesFactory.createRect(startPoint, width, height);
                
                drawingFactory.drawRect(ctx, rect, false);
                
                console.log('Rect drop');
            }
        },
        circle: {
            name: 'circle',
            init: function($event){
                var point = shapesFactory.createPoint($event);
                
                drawingFactory.setDrawing(true);
                canvasFactory.setStartingPoint(point);
                
                console.log('Drawing a circle: '+JSON.stringify(point));
            },
            drag: function($event){
                if(drawingFactory.isDrawing()){
                    canvasFactory.clearAuxCanvas();

                    var ctx = canvasFactory.getCanvasAuxContext();
                    var endPoint = shapesFactory.createPoint($event);
                    var startPoint = canvasFactory.getStartingPoint();
                    
                    var x = endPoint.x - startPoint.x;
                    var y = endPoint.y - startPoint.y;
                    
                    var radio = Math.sqrt(((x*x)+(y*y)));
                    var angle = Math.PI*2;
                    
                    var arc = shapesFactory.createArc(startPoint, radio, angle)

                    drawingFactory.drawArc(ctx, arc, false);

                    console.log('Line: drawing');
                }
            },
            drop: function($event){
                drawingFactory.setDrawing(false);
                canvasFactory.clearAuxCanvas();

                var ctx = canvasFactory.getCanvasContext();
                var endPoint = shapesFactory.createPoint($event);
                var startPoint = canvasFactory.getStartingPoint();

                var x = endPoint.x - startPoint.x;
                var y = endPoint.y - startPoint.y;

                var radio = Math.sqrt(((x*x)+(y*y)));
                var angle = Math.PI*2;

                var arc = shapesFactory.createArc(startPoint, radio, angle)

                drawingFactory.drawArc(ctx, arc, false);

                console.log('Line: drawing');
            }
        },
        polygon: {
            name: 'polygon',
            init: function(){
                console.log('Drawing a polygon');
            }
        },
        free: {
            name: 'free',
            init: function($event){
                var point = shapesFactory.createPoint($event);
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
            },
            drag: function($event){
                if(drawingFactory.isDrawing()){
                    canvasFactory.clearAuxCanvas();
                    
                    var point = shapesFactory.createPoint($event);
                    var ctx = canvasFactory.getCanvasAuxContext();
                    
                    var auxline = shapesFactory.createLine(canvasFactory.getStartingPoint(), point);
                    
                    drawingFactory.drawLine(ctx, auxline);
                }
            },
            drop: function($event){
                
                canvasFactory.clearAuxCanvas();
                
                var point = shapesFactory.createPoint($event);
                var ctx = canvasFactory.getCanvasContext();
                
                drawingFactory.drawPath(ctx, point);
            },
            end: function($event){
                drawingFactory.setDrawing(false);
                var ctx = canvasFactory.getCanvasContext();
                drawingFactory.endPath(ctx);
                console.log('end');
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

