var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 5000;

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket){
	socket.on('start', function(msg){
    	socket.broadcast.emit('startdraw', msg);
	});
	socket.on('sendpoint', function(msg){
    	socket.broadcast.emit('recievepoint', msg);
	});
	socket.on('end', function(msg){
    	socket.broadcast.emit('enddraw', msg);
	});
});

http.listen(port, function(){
	console.log("http server listening on %d", port)
});