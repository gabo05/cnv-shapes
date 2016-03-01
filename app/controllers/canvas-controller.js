 var canvasController = function($scope, canvasFactory, drawingFactory, shapesFactory, valuesProvider, lineService, brushService, circleService, freeService, squareService, curveService, pencilService, textService){

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
    $scope.setMessage = function(msg){
       document.getElementById('te').innerHTML+=msg+'<br>';
    };
   $scope.drawer = {
       init: function($event){
           if($scope.currentTool){
               var point;
               if(valuesProvider.isTouchDevice()){
                  $event.preventDefault();
                  
                  var evt = $event.touches.item(0);
                  evt.currentTarget = $event.currentTarget;
                  point = shapesFactory.createPoint(evt);
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
               if(valuesProvider.isTouchDevice()){
                  $event.preventDefault();
                  
                  var evt = $event.touches.item(0);
                  evt.currentTarget = $event.currentTarget;
                  point = shapesFactory.createPoint(evt);
               }
               else{
                   point = shapesFactory.createPoint($event);
               }
               $scope.currentTool.drag(point);
           }
       },
       drop: function($event){
           if($scope.currentTool){
              try{
               var point;
               if(valuesProvider.isTouchDevice()){
                  $event.preventDefault();
                  
                  var evt = $event.changedTouches.item(0);
                  evt.currentTarget = $event.currentTarget;
                  point = shapesFactory.createPoint(evt);
               }
               else{
                   point = shapesFactory.createPoint($event);
               }
               $scope.currentTool.drop(point);
              }
              catch(e){
                 $scope.setMessage(e.message);
              }
           }
       },
       end: function($event){
           if($scope.currentTool){
               var point;
               if(valuesProvider.isTouchDevice()){
                  $event.preventDefault();
                  
                  var evt = $event.touches.item(0);
                  evt.currentTarget = $event.currentTarget;
                  point = shapesFactory.createPoint(evt);
               }
               else{
                   point = shapesFactory.createPoint($event);
               }
               $scope.currentTool.end(point);
           }
       }
   };


};
