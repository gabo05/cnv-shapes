var canvasFactory = function(){
    var canvasFactory = {};
    
    canvasFactory.startingPoint =  { x: 0, y: 0 };
    canvasFactory.setStartingPoint = function(point){
        this.startingPoint = point;
    };
    canvasFactory.getStartingPoint = function(){
        return this.startingPoint;
    }
    canvasFactory.getCanvasContext= function(){
        if(!this.context){
            var cnv = document.getElementById('real-canvas');
            this.context = cnv.getContext('2d');
            this.canvas = cnv;
        }
        return  this.context;
    };
    canvasFactory.clearCanvas= function(){
        if(!this.context){
            var cnv = document.getElementById('real-canvas');
            this.context = cnv.getContext('2d');
            this.canvas = cnv;
        }
        this.canvas.width = this.canvas.width;
    };
    canvasFactory.getCanvasAuxContext= function(){
        if(!this.auxcontext){
            var auxcnv = document.getElementById('aux-canvas');
            canvasFactory.auxcontext = auxcnv.getContext('2d');
            canvasFactory.auxcanvas = auxcnv;
        }
        return this.auxcontext;
    };
    canvasFactory.clearAuxCanvas= function(){
        if(!this.auxcontext){
            var auxcnv = document.getElementById('aux-canvas');
            canvasFactory.auxcontext = auxcnv.getContext('2d');
            canvasFactory.auxcanvas = auxcnv;
        }
        this.auxcanvas.width = this.auxcanvas.width;
    };
    return canvasFactory;
};