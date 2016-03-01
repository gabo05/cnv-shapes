var socketFactory = function(toolsFactory, valuesProvider){
    var socketFact = {};
    
    socketFact.socket = io();
    
    socketFact.start = function(info) {
        info.values = valuesProvider.getAll();
        socketFact.socket.emit('start', JSON.stringify(info));
    };
    socketFact.send = function(info) {
        info.values = valuesProvider.getAll();
        socketFact.socket.emit('sendpoint', JSON.stringify(info));
    };
    socketFact.end = function(info) {
        info.values = valuesProvider.getAll();
        socketFact.socket.emit('end', JSON.stringify(info));
    };
    
    socketFact.startListening = function() {
        socketFact.socket.on('startdraw', function (msg) {
            var info = JSON.parse(msg);
            
            valuesProvider.setAll(info.values);
            
            socketFact.tool = toolsFactory.getTool(info.tool);
            
            socketFact.tool.init(info.point);
        });
        socketFact.socket.on('recievepoint', function (msg) {
            var info = JSON.parse(msg);
            
            valuesProvider.setAll(info.values);
            
            socketFact.tool = toolsFactory.getTool(info.tool);
            
            socketFact.tool.drag(info.point);
        });
        socketFact.socket.on('enddraw', function (msg) {
            var info = JSON.parse(msg);
            
            valuesProvider.setAll(info.values);
            
            socketFact.tool = toolsFactory.getTool(info.tool);
            
            socketFact.tool.drop(info.point);
        });
    };
    //socketFact.startListening();
    socketFact.stopListening = function() {
        socketFact.socket.removeAllListeners("startdraw");
        socketFact.socket.removeAllListeners("recievepoint");
        socketFact.socket.removeAllListeners("enddraw");
    }
    return socketFact;
};