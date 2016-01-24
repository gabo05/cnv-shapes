var canvasCtrl = function($scope){
    
    $scope.tools = {
        line: {
            name: 'line',
            init: function(){
                console.log('Drawing a line');
            }
        },
        curve: {
            name: 'curve',
            init: function(){
                console.log('Drawing a curve');
            }
        },
        square: {
            name: 'square',
            init: function(){
                console.log('Drawing a square');
            }
        },
        fill_square: {
            name: 'fill_square',
            init: function(){
                console.log('Drawing a fill_square');
            }
        },
        circumference: {
            name: 'circumference',
            init: function(){
                console.log('Drawing a circumference');
            }
        },
        circle: {
            name: 'circle',
            init: function(){
                console.log('Drawing a circle');
            }
        },
        polygon: {
            name: 'polygon',
            init: function(){
                console.log('Drawing a polygon');
            }
        },
        fill_polygon: {
            name: 'fill_polygon',
            init: function(){
                console.log('Drawing a fill_polygon');
            }
        },
        free: {
            name: 'free',
            init: function(){
                console.log('Drawing a free');
            }
        },
        text: {
            name: 'text',
            init: function(){
                console.log('Drawing a text');
            }
        },
        brush: {
            name: 'brush',
            init: function(){
                console.log('Drawing a brush');
            }
        }
    };
};

