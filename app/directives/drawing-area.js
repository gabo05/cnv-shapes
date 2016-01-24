var drawingArea = function(){
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
        }
    };
}