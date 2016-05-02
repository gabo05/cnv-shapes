(function(app){
	app.directive('lineSettings', ['valuesFactory', function(valuesFactory){
        return{
            restrict: 'E',
            templateUrl: 'app/templates/line-settings.html',
            scope: false,
            controllerAs: 'lineSettings',
            controller: function(){
                this.lineWidth = 1;
                this.dashedWidth = null;
                this.dashedSpacing = null;
                
            },
            link: function(scope, element, attrs){

                var updateProvider = function(newValue, oldValue){
                    var lineSettings = element.controller('lineSettings');
                    
                    valuesFactory.setValue('lineWidth', lineSettings.lineWidth);
                    valuesFactory.setValue('dashedWidth', lineSettings.dashedWidth);
                    valuesFactory.setValue('dashedSpacing', lineSettings.dashedSpacing);
                    
                };
                scope.$watch('lineSettings.lineWidth', updateProvider);
                scope.$watch('lineSettings.dashedWidth', updateProvider);
                scope.$watch('lineSettings.dashedSpacing', updateProvider);
            }
        };
    }]);
})(angular.module('cnvShapes'));