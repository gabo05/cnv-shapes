var drawingArea = function(valuesProvider){
    return{
        restrict: 'E',
        scope: false,
        templateUrl: 'app/templates/drawing-area.html',
        controllerAs: 'drawing',
        controller: function(){
            this.height = 0;
            this.width = 0;
        },
        link: function(scope, element, attrs){
            var drawing = scope.drawing;
            
            drawing.width = attrs.width;
            drawing.height = attrs.height;
            
            var cnv = element[0].querySelector('canvas.auxcanv');
            
            if(valuesProvider.isTouchDevice()){
                var addEventHandler = function(elem,eventType,handler) {
                    if (elem.addEventListener)
                        elem.addEventListener (eventType,handler,false);
                    else if (elem.attachEvent)
                        elem.attachEvent ('on'+eventType,handler); 
                }
                addEventHandler(cnv, 'touchstart', scope.drawer.init);
                addEventHandler(cnv, 'touchmove', scope.drawer.drag);
                addEventHandler(cnv, 'touchend', scope.drawer.drop);
            }
        }
    };
}