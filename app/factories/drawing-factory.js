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
    drawingFact.drawRect = function(ctx, rect){
        ctx.setLineDash([rect.dashedWidth, rect.dashedSpacing])
        if(rect.fill){
            ctx.fillStyle = rect.fillColor;
            ctx.fillRect(rect.startPoint.x,rect.startPoint.y,rect.width,rect.height);
        }
        if(rect.stroke){
            ctx.strokeStyle = rect.strokeColor;
            ctx.lineWidth = rect.lineWidth;
            ctx.strokeRect(rect.startPoint.x,rect.startPoint.y,rect.width,rect.height);
        }
    };
    drawingFact.drawArc = function(ctx, arc){
        if(arc.stroke){
            ctx.setLineDash([arc.dashedWidth, arc.dashedSpacing]);
            ctx.strokeStyle = arc.strokeColor;
            ctx.lineWidth = arc.lineWidth;
        }
        if(arc.fill){
            ctx.fillStyle = arc.fillColor;
        }
        ctx.beginPath();
        ctx.arc(arc.center.x,arc.center.y,arc.radio,0,arc.angle,true);
        ctx.closePath();
        if(arc.fill){
            ctx.fill();
        }
        if(arc.stroke){
            ctx.stroke();
        }
    }
    return drawingFact;
}