var canvas = document.getElementById('canvas-canvas');
var canvasAux = document.getElementById('canvas-aux');
var context;
var contextAux;
var mouseX1,mouseX2;
var mouseY1,mouseY2;
var drawing = false;
var LINE = 0, CURVE = 1, STROKE_RECT = 2, FILL_RECT = 3, STROKE_ARC = 4, FILL_ARC = 5, PATH = 6, FILL_POLYGON = 7, STROKE_POLIGON = 8, TEXT = 9, BRUSH = 10; 
var figure = 0;
var auxShape;
var shapes = [];

$(document).ready(function(){
    
   $('.canvas-colorpicker').colorpicker();
    
    context = canvas.getContext('2d');
    contextAux = canvasAux.getContext('2d');
    
    $(canvasAux).mousedown(function(event){
        mouseX1 = event.clientX - $(canvasAux).position().left;
        mouseY1 = event.clientY - $(canvasAux).position().top;
        
        drawing = true;
        
        switch(figure){
            case LINE: {
                auxShape = new Line(mouseX1,mouseY1,mouseX1,mouseY1,$('.canvas-colorpicker').attr('data-color-selected').toString(),2);
                   
                break;
                }
                
                case CURVE: drawCurve();break;
                
                case STROKE_RECT: {
                    
                    lineWith = document.getElementById('canvas-line-width').value;
                    
                    auxShape = new Rect(2,mouseX1,mouseY1,0,0,$('.canvas-colorpicker').attr('data-color-selected').toString(),lineWith);
                    
                    break;
                }
                
                case FILL_RECT: {
                    
                    auxShape = new Rect(3,mouseX1,mouseY1,0,0,$('.canvas-colorpicker').attr('data-color-selected').toString());
                    
                    break;
                }
                
                case STROKE_ARC: {
                    
                    lineWith = document.getElementById('canvas-line-width').value;
                    
                    auxShape = new Arc(4,mouseX1,mouseY1,0,Math.PI*2,$('.canvas-colorpicker').attr('data-color-selected').toString(),lineWith);
                    
                    break;
                }
                
                case FILL_ARC: {
                    
                    auxShape = new Arc(5,mouseX1,mouseY1,0,Math.PI*2,$('.canvas-colorpicker').attr('data-color-selected').toString());
                    
                    break;
                }
            case PATH:{
                if(auxShape==null || auxShape.type!=PATH){
                    
                    lineWith = document.getElementById('canvas-line-width').value;
                    
                    auxShape = new Path($('.canvas-colorpicker').attr('data-color-selected').toString(),lineWith,PATH);
                    
                    beginDrawPath(contextAux, auxShape);
                    
                    auxShape.addPoint(mouseX1,mouseY1);
                }
                break;
            }
            case FILL_POLYGON:{
                if(auxShape==null || auxShape.type!=FILL_POLYGON){
                    
                    auxShape = new Path($('.canvas-colorpicker').attr('data-color-selected').toString(),1,FILL_POLYGON);
                    
                    beginDrawPath(contextAux, auxShape);
                    
                    auxShape.addPoint(mouseX1,mouseY1);
                }
                break;
            }
        }
        
    });
    
    $(canvasAux).mousemove(function(event){
        
        if(drawing){
            mouseX2 = event.clientX - $(canvasAux).position().left;
            mouseY2 = event.clientY - $(canvasAux).position().top;
            
            switch(figure){
                case LINE: {
                    
                    lineWith = document.getElementById('canvas-line-width').value;
                    
                    clearCanvas(canvasAux);
                    
                    auxShape = new Line(mouseX1,mouseY1,mouseX2,mouseY2,$('.canvas-colorpicker').attr('data-color-selected').toString(),lineWith);
                   
                    drawLine(contextAux,auxShape);
                    
                    break;
                }
                
                case CURVE: drawCurve();break;
                
                case STROKE_RECT: {
                    clearCanvas(canvasAux);
                    
                    width = mouseX2 - mouseX1;
                    height = mouseY2 - mouseY1;
                    
                    lineWith = document.getElementById('canvas-line-width').value;
                    
                    auxShape = new Rect(2,mouseX1,mouseY1,width,height,$('.canvas-colorpicker').attr('data-color-selected').toString(),lineWith);
                    
                    drawStrokeRect(contextAux,auxShape);
                    
                    break;
                }
                
                case FILL_RECT: {
                    clearCanvas(canvasAux);
                    
                    width = mouseX2 - mouseX1;
                    height = mouseY2 - mouseY1;
                    
                    auxShape = new Rect(3,mouseX1,mouseY1,width,height,$('.canvas-colorpicker').attr('data-color-selected').toString(),0);
                    
                    drawFillRect(contextAux,auxShape);
                    
                    break;
                }
                
                case STROKE_ARC: {
                    clearCanvas(canvasAux);
                    
                    x = mouseX2 - mouseX1;
                    y = mouseY2 - mouseY1;
                    
                    radio = Math.sqrt(((x*x)+(y*y)));
                    
                    lineWith = document.getElementById('canvas-line-width').value;
                    
                    auxShape = new Arc(4,mouseX1,mouseY1,radio,Math.PI*2,$('.canvas-colorpicker').attr('data-color-selected').toString(),lineWith);
                    
                    drawStrokeArc(contextAux,auxShape);
                    
                    break;
                }
                
                case FILL_ARC: {
                    clearCanvas(canvasAux);
                    
                    x = mouseX2 - mouseX1;
                    y = mouseY2 - mouseY1;
                    
                    radio = Math.sqrt(((x*x)+(y*y)));
                    
                    auxShape = new Arc(5,mouseX1,mouseY1,radio,Math.PI*2,$('.canvas-colorpicker').attr('data-color-selected').toString());
                    
                    drawFillArc(contextAux,auxShape);
                    
                    break;
                }
                
                case PATH: {
                    clearCanvas(canvasAux);
                    
                    drawPath(contextAux);
                    
                    break;
                }
                case FILL_POLYGON:{
                    
                    clearCanvas(canvasAux);
                    
                    drawPath(contextAux);
                    
                    break;
                }
                
                case TEXT: drawText();break;
                    
                case BRUSH:{
                    
                    radio = document.getElementById('canvas-line-width').value;
                    
                    auxShape = new Arc(5,mouseX2,mouseY2,radio,Math.PI*2,$('.canvas-colorpicker').attr('data-color-selected').toString());
                    
                    drawFillArc(context,auxShape);
                    
                    break;
                }
            }
        }
    });
    
    $(canvasAux).mouseup(function(event){
        if(figure!=PATH && figure!=FILL_POLYGON)
            drawing = false;
        clearCanvas(canvasAux);
        switch(figure){
                case LINE:drawLine(context,auxShape);break;
                
                case CURVE: drawCurve(context,auxShape);break;
                
                case STROKE_RECT: drawStrokeRect(context,auxShape);break;
                
                case FILL_RECT: drawFillRect(context,auxShape);break;
                
                case STROKE_ARC: drawStrokeArc(context,auxShape);break;
                
                case FILL_ARC: drawFillArc(context,auxShape);break;
                
                case PATH: {
                    
                    if(auxShape==null || auxShape.type!=PATH){
                     
                        lineWith = document.getElementById('canvas-line-width').value;
                        
                        auxShape = new Path($('.canvas-colorpicker').attr('data-color-selected').toString(),lineWith,PATH);
                    }
                    mouseX2 = event.clientX - $(canvasAux).position().left;
                    mouseY2 = event.clientY - $(canvasAux).position().top;
                    
                    auxShape.addPoint(mouseX2,mouseY2);
                    
                    l = auxShape.getLastLine();
                    
                    drawLine(context,l, true);
                    
                    break;
                }
                case FILL_POLYGON: {
                    
                    if(auxShape==null || auxShape.type!=FILL_POLYGON){
                     
                        //lineWith = document.getElementById('canvas-line-width').value;
                        
                        auxShape = new Path($('.canvas-colorpicker').attr('data-color-selected').toString(),1,FILL_POLYGON);
                    }
                    mouseX2 = event.clientX - $(canvasAux).position().left;
                    mouseY2 = event.clientY - $(canvasAux).position().top;
                    
                    auxShape.addPoint(mouseX2,mouseY2);
                    
                    l = auxShape.getLastLine();
                    
                    drawLine(context,l);
                    
                    break;
                }
                case TEXT: drawText(context,auxShape);break;
            }
        shapes.push(auxShape);
    });
    $('body').keydown(function(event){
        if(drawing && (event.keyCode==69 || event.keyCode==101)){
            //alert('end');
            drawing = false;
            
            switch(figure){
                case PATH: endDrawPath(contextAux);break;
                case FILL_POLYGON: endDrawFillPolygon(contextAux,auxShape);
            }
            
            
            auxShape = null;
            
            clearCanvas(canvasAux);
        }
    });
    $('button[id^=canvas-tool]').click(function(event){
        var src = $(event.target);
        figure = parseInt(src.attr('data-figure'));
    });
    $('#canvas-export').click(function(){
        imgPath = canvas.toDataURL('image/png');
        window.open(imgPath,'blank','width=850,height=850');
    });
    
    $('#canvas-line-width').on('change',function(){
        document.getElementById('canvas-line-width-value').value = document.getElementById('canvas-line-width').value;
    });
    $('#canvas-line-width-value').change(function(){
        document.getElementById('canvas-line-width').value = document.getElementById('canvas-line-width-value').value;
    });
});

function clearCanvas(cnv){
    //cnv.getContext('2d').clearRect(0,0,cnv.width,cnv.height);
   cnv.width = cnv.width;
}
function drawLine(ctx,line, asPath){
    if(asPath === undefined)
        asPath = false;
    if(!asPath)
        ctx.beginPath();

    ctx.moveTo(line.lx1,line.ly1);
    ctx.lineTo(line.lx2,line.ly2);
    ctx.strokeStyle = line.color;
    ctx.lineWidth = line.width;
    ctx.stroke();

    if(!asPath)
        ctx.closePath();
}
function drawCurve(ctx){

}

function drawStrokeRect(ctx,rect){

    ctx.strokeStyle = rect.strokeColor;
    
    ctx.lineWidth = rect.lineWidth;
    
    ctx.strokeRect(rect.x,rect.y,rect.width,rect.height);
}

function drawFillRect(ctx,rect){

    //alert($('.canvas-colorpicker').getSelectedColor());
    ctx.fillStyle = rect.fillColor;
    
    ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
}

function drawStrokeArc(ctx,arc){
    
    ctx.strokeStyle = arc.strokeColor;
    
    ctx.lineWidth = arc.lineWidth;
    
    ctx.beginPath();
    
    ctx.arc(arc.x,arc.y,arc.radio,0,arc.angle,true);
    
    ctx.closePath();
    
    ctx.stroke();
}

function drawFillArc(ctx,arc){

    ctx.fillStyle = arc.strokeColor;
    
    ctx.beginPath();
    
    ctx.arc(arc.x,arc.y,arc.radio,0,arc.angle,true);
    
    ctx.closePath();
    
    ctx.fill();
}

function beginDrawPath(ctx,path){
    ctx.beginPath();
    ctx.strokeStyle = path.color;
    ctx.lineWidth = path.lineWidth;
    ctx.lineJoin = 'miter';
}
function drawPath(ctx){
    ctx.moveTo(mouseX1,mouseY1);
    ctx.lineTo(mouseX2,mouseY2);
    ctx.lineJoin = 'miter';
    //ctx.lineCap = 'square';
    //ctx.lineJoin = 'round';
    //ctx.lineJoin = 'bevel';
    ctx.stroke();
}
function endDrawPath(ctx){
    
    ctx.closePath();
}

function endDrawFillPolygon(ctx,polygon){
    
    pi = polygon.getFirstPoint();
    
    pf = polygon.getLastPoint();
    
    ctx.moveTo(pf.x,pf.y);
    
    ctx.lineTo(pi.x,pi.y);
    
    ctx.fillStyle = $('.canvas-colorpicker').attr('data-color-selected').toString();
    
    ctx.fill();
    
    ctx.closePath();
}
function drawText(ctx){

    //alert($('.canvas-colorpicker').getSelectedColor());
    context.fillStyle = $('.canvas-colorpicker').attr('data-color-selected').toString();
    width = mouseX2 - mouseX1;
    height = mouseY2 - mouseY1;
    
    context.fillRect(mouseX1,mouseY1,width,height);
}