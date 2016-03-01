 var canvasController = function($scope, canvasFactory, drawingFactory, shapesFactory, toolsFactory, socketFactory, valuesProvider){
   socketFactory.startListening();
   $scope.tools = toolsFactory.getTools();
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
               setTimeout(function(){
                    socketFactory.start({tool: $scope.currentTool.name, point: point})
               }, 0);
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
               setTimeout(function(){
                   socketFactory.send({tool: $scope.currentTool.name, point: point})
               }, 0);
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
               setTimeout(function(){
                   socketFactory.end({tool: $scope.currentTool.name, point: point})
               }, 0);
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
