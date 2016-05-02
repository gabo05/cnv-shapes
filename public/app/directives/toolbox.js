(function(app){
	app.directive('toolbox', [function(){
        return{
            restrict: 'E',
            templateUrl: 'app/templates/toolbox.html',
            scope: false,
            link: function(scope, element, attrs){
                scope.changeTool = function(toolName, $event){
                    scope.currentTool = scope.tools[toolName];
                }
            }
        };
    }]);
})(angular.module('cnvShapes'));