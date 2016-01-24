var toolbox = function(){
    return{
        restrict: 'E',
        templateUrl: 'app/templates/toolbox.html',
        controllerAS: 'toolbox',
        controller: ['$scope', function($scope){
            
        }],
        scope: false,
        link: function(scope, element, attrs){
            scope.changeTool = function(toolName, $event){
                scope.currentTool = scope.tools[toolName];
            }
        }
    };
};