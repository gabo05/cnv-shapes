var lineSettings = function(){
    return{
        restrict: 'E',
        templateUrl: 'app/templates/line-settings.html',
        scope: false,
        controller: ['$scope', function($scope){
            $scope.lineWidth = 1;
            $scope.dashedWidth = null;
            $scope.dashedSpacing = null;
        }],
        controllerAs: 'linesett'
    };
}