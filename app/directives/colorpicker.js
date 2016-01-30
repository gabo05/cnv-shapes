var colorpicker = function(valuesProvider){
    return{
        restrict: 'E',
        templateUrl: 'app/templates/colorpicker.html',
        bindToController:{
            colorpicker: '='
        },
        controllerAs: 'colorpicker',
        controller: ['$scope', function($scope){
            this.red = 127;
            this.green = 127;
            this.blue = 127;
            this.alpha = 100;
            this.rgba = 'rgba('+this.red+','+this.green+','+this.blue+','+(this.alpha/100)+')';
            
        }],
        scope:false,
        link: function(scope, element, attrs){

            var updateProvider = function(newValue, oldValue){
                var colorpicker = element.controller('colorpicker');
                
                colorpicker.rgba = 'rgba('+colorpicker.red+','+colorpicker.green+','+colorpicker.blue+','+(colorpicker.alpha/100)+')';
                valuesProvider.setValue('color', colorpicker.rgba);
            };
            scope.$watch('colorpicker.red', updateProvider);
            scope.$watch('colorpicker.green', updateProvider);
            scope.$watch('colorpicker.blue', updateProvider);
            scope.$watch('colorpicker.alpha', updateProvider);
        }
    }
};