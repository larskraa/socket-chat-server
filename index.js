/**
 * Created by Lars on 04/03/16.
 */

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log("Client connected")
    socket.on('chat message', function(msg){
        console.log("Client sent message")
        io.emit('chat message', msg);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000')
});




