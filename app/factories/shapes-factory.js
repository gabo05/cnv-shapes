var Point = function(xl,yl){
    this.x = xl;
    this.y = yl;
}
var Line = function(p1,p2,c,w, dw, ds){
    this.type = 0;
    this.startPoint = p1;
    this.endPoint = p2;
    this.color = c;
    this.width = w;
    if(dw)
        this.dashedWidth = dw;
    else
        this.dashedWidth = 0;
    if(ds)
        this.dashedSpacing = ds;
    else
        this.dashedSpacing = 0;
}

var Curve = function(){
    this.type = 1;
    this.x1 = 0;
    this.x2 = 0;
    this.y1 = 0;
    this.y2 = 0;
    this.color = 'rgba(0,0,0,1)';
    this.width = 1;
    this.controlX1 = 0;
    this.controlX2 = 0;
    this.controlY1 = 0;
    this.controlY2 = 0;
}

var Rect = function(p,w,h,sc, fc, lw, dw, ds, f, s){
    this.type = 2;
    this.startPoint = p;
    this.width = w;
    this.height = h;
    this.fillColor = fc;
    this.strokeColor = sc;
    this.lineWidth = lw;
    if(dw)
        this.dashedWidth = dw;
    else
        this.dashedWidth = 0;
    if(ds)
        this.dashedSpacing = ds;
    else
        this.dashedSpacing = 0;
    this.fill = f;
    this.stroke = s;
}

var Arc = function(c, r, a, fc, lc, lw, dw, ds, f, s){
    this.type = 3;
    this.center = c;
    this.radio = r;
    this.angle = a;
    this.fillColor = fc;
    this.strokeColor = lc;
    this.lineWidth = lw;
    if(dw)
        this.dashedWidth = dw;
    else
        this.dashedWidth = 0;
    if(ds)
        this.dashedSpacing = ds;
    else
        this.dashedSpacing = 0;
    this.fill = f;
    this.stroke = s;
}

var Path = function(c,lw,t, dw, ds){
    this.type = t;
    this.points = [];
    this.color = c;
    this.lineWidth = lw;
    this.addPoint = function(x,y){
        this.points.push(new Point(x,y));
    }
    
    this.getLastLine= function(){
        
        p1 = this.points[this.points.length-1];
        p2 = this.points[this.points.length-2];
        
        l = new Line(p1.x,p1.y,p2.x,p2.y,this.color,this.lineWidth);
        
        return l;
    }
    
    this.getFirstPoint = function(){
        return this.points[0];
    }
    this.getLastPoint = function(){
        return this.points[this.points.length-1];
    }
    if(dw)
        this.dashedWidth = dw;
    else
        this.dashedWidth = 0;
    if(ds)
        this.dashedSpacing = ds;
    else
        this.dashedSpacing = 0;
}
var shapesFactory = function(valuesProvider){
    var shapesFactory = {};
    
    shapesFactory.createPoint = function($event){
        var x;
        var y;
        if ($event.pageX != undefined && $event.pageY != undefined) {
            x = $event.pageX;
            y = $event.pageY;
        }
        else {
            x = $event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = $event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        x -= $event.currentTarget.offsetLeft;
        y -= $event.currentTarget.offsetTop;

        return {
            x: x,
            y: y
        };
    };
    shapesFactory.createLine = function(point1, point2){
        return new Line(point1, point2, valuesProvider.getValue('lineColor'), valuesProvider.getValue('lineWidth'), valuesProvider.getValue('dashedWidth'), valuesProvider.getValue('dashedSpacing'));
    };
    shapesFactory.createRect = function(point, width, heigth){
        var isFilled = valuesProvider.getValue('fillAlpha') > 0;
        var isStroked = valuesProvider.getValue('lineAlpha') > 0;
        return new Rect(point, width, heigth, valuesProvider.getValue('lineColor'), valuesProvider.getValue('fillColor'), valuesProvider.getValue('lineWidth'), valuesProvider.getValue('dashedWidth'), valuesProvider.getValue('dashedSpacing'), isFilled, isStroked);
    };
    shapesFactory.createArc = function(center, radius, angle, isfree){
        var isFilled = valuesProvider.getValue('fillAlpha') > 0 || isfree;
        var isStroked = valuesProvider.getValue('lineAlpha') > 0 && !isfree;
        var fillColor;
        if(isfree)
            fillColor = valuesProvider.getValue('lineColor');
        else
            fillColor = valuesProvider.getValue('fillColor');
        
        return new Arc(center, radius, angle, fillColor, valuesProvider.getValue('lineColor'),valuesProvider.getValue('lineWidth'), valuesProvider.getValue('dashedWidth'), valuesProvider.getValue('dashedSpacing'), isFilled, isStroked)
    }
    return shapesFactory;
}