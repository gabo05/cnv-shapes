(function(app){
	app.factory('toolsFactory', ['lineService', 'brushService', 'circleService', 'freeService', 'squareService', 'curveService', 'pencilService', 'textService', function(lineService, brushService, circleService, freeService, squareService, curveService, pencilService, textService){
        var toolFact = {};
        
        toolFact.tools = {
            line: lineService,
            curve: curveService,
            square: squareService,
            circle: circleService,
            pencil: pencilService,
            free: freeService,
            text: textService,
            brush: brushService
        };
        toolFact.getTools = function () {
            return toolFact.tools;
        };
        toolFact.getTool = function(toolName) {
            return toolFact.tools[toolName];
        }
        return toolFact;
    }]);
})(angular.module('cnvShapes'));