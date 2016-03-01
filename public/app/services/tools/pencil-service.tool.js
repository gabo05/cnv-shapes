var pencilTool = function(shapesFactory, canvasFactory, drawingFactory, valuesProvider){
    self = this;
    this.name = 'pencil';
    this.points = [];
    this.drawingThreat;
    this.drawingFunc = function(){
        if(self.points.length > 0){
            var point = self.points.shift();
            
            var ctx = canvasFactory.getCanvasContext();
            
            ctx.lineTo(point.x, point.y);
            ctx.stroke();
            
            if(!drawingFactory.isDrawing() && self.points.length == 0){
                ctx.closePath();
                clearInterval(self.drawingThreat);
            }
        }
    };
    this.init= function(point){
        //socketFactory.startListening();
        
        this.drawingThreat = setInterval(this.drawingFunc, 5);
        
        drawingFactory.setDrawing(true);
        
        var ctx = canvasFactory.getCanvasContext();
        var lineValues = shapesFactory.createLine(point, point);
        
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        
        ctx.setLineDash([lineValues.dashedWidth, lineValues.dashedSpacing]);
        ctx.strokeStyle = lineValues.color;
        ctx.lineWidth = lineValues.width;
        
        this.points.push(point);
        //socket.emit('start', JSON.stringify(point));
    };
    this.drag= function(point){
        if(drawingFactory.isDrawing()){
            this.points.push(point);
        }
    };
    this.drop= function(point){
        this.points.push(point);

        //socketFactory.stopListening();
        drawingFactory.setDrawing(false);
    };
    this.end= function(point){
    }
    
};