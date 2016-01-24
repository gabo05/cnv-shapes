var colorpicker = function(){
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
            $scope.RGBA = 'rgba('+this.red+','+this.green+','+this.blue+','+(this.alpha/100)+')';
            
        }],
        scope:false,
        link: function(scope, element, attrs){

            var updatePreview = function(newValue, oldValue){
                var colorpicker = element.controller('colorpicker');
                scope.RGBA = 'rgba('+colorpicker.red+','+colorpicker.green+','+colorpicker.blue+','+(colorpicker.alpha/100)+')';
            };
            scope.$watch('colorpicker.red', updatePreview);
            scope.$watch('colorpicker.green', updatePreview);
            scope.$watch('colorpicker.blue', updatePreview);
            scope.$watch('colorpicker.alpha', updatePreview);
        }
    }
};