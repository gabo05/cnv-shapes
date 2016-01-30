var drawingFactory = function(){
    var drawingFact = {};
    
    drawingFact.drawing = false;
    
    drawingFact.setDrawing = function(isdrawing){
        this.drawing = isdrawing;
    }
    drawingFact.isDrawing = function(){
        return this.drawing;
    }
    drawingFact.drawLine = function(ctx, line, asPath){
        if(!asPath)
            ctx.beginPath();
        
        ctx.setLineDash([line.dashedWidth, line.dashedSpacing])
        ctx.moveTo(line.startPoint.x,line.startPoint.y);
        ctx.lineTo(line.endPoint.x,line.endPoint.y);
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.width;
        ctx.stroke();

        if(!asPath)
            ctx.closePath();
    };
    return drawingFact;
}