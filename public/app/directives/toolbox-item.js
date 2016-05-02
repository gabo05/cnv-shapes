(function(app){
	app.directive('toolboxItem', [function(){
        return{
            restrict: 'E',
            templateUrl: 'app/templates/toolbox-item.html',
            scope: {
                tool: '=',
                icon: '@',
                onselect: '&'
            },
            link: function(scope, element, attrs){
                scope.select = function($event){
                    scope.$parent.changeTool(scope.tool, $event);
                }
            }
        };
    }]);
})(angular.module('cnvShapes'));