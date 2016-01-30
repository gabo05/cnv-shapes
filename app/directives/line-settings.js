var lineSettings = function(valuesProvider){
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
                
                valuesProvider.setValue('lineWidth', lineSettings.lineWidth);
                valuesProvider.setValue('dashedWidth', lineSettings.dashedWidth);
                valuesProvider.setValue('dashedSpacing', lineSettings.dashedSpacing);
                
            };
            scope.$watch('lineSettings.lineWidth', updateProvider);
            scope.$watch('lineSettings.dashedWidth', updateProvider);
            scope.$watch('lineSettings.dashedSpacing', updateProvider);
        }
    };
}