var canvasController = function($scope, canvasFactory, drawingFactory, shapesFactory, valuesProvider, lineService, brushService, circleService, freeService, squareService, curveService, pencilService, textService){
    
    $scope.isTouchDevice = function(){
        return "ontouchstart" in window || navigator.msMaxTouchPoints;
    };
    
    $scope.tools = {
        line: lineService,
        curve: curveService,
        square: squareService,
        circle: circleService,
        pencil: pencilService,
        free: freeService,
        text: textService,
        brush: brushService
    };
    
    $scope.drawer = {
        init: function($event){
            if($scope.currentTool){
                var point;
                if($scope.isTouchDevice()){
                    point = shapesFactory.createPoint($event.touches.item(0));
                }
                else{
                    point = shapesFactory.createPoint($event);
                }
                $scope.currentTool.init(point);
            }
        },
        drag: function($event){
            if($scope.currentTool){
                var point;
                if($scope.isTouchDevice()){
                    point = shapesFactory.createPoint($event.touches.item(0));
                }
                else{
                    point = shapesFactory.createPoint($event);
                }
                $scope.currentTool.drag(point);
            }
        },
        drop: function($event){
            if($scope.currentTool){
                var point;
                if($scope.isTouchDevice()){
                    point = shapesFactory.createPoint($event.touches.item(0));
                }
                else{
                    point = shapesFactory.createPoint($event);
                }
                $scope.currentTool.drop(point);
            }
        },
        end: function($event){
            if($scope.currentTool){
                var point;
                if($scope.isTouchDevice()){
                    point = shapesFactory.createPoint($event.touches.item(0));
                }
                else{
                    point = shapesFactory.createPoint($event);
                }
                $scope.currentTool.end(point);
            }
        }
    };
    
    
};

