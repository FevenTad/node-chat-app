//server side

const path= require('path');
const http= require('http');
var express = require('express');
var app = express();
const socketIO=require('socket.io');

const publicPath=path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var server =http.createServer(app); 
var io = socketIO(server); // integrtating socket with the server

app.use(express.static(publicPath));
//we bring the socket var from the above middleware. 
//we use it for both the server and the client
//socket.on -to listen for an event
//socket.emit -to send an event
io.on('connection', function(socket){ //server is listening to a connection event
    console.log('new user connected');

    socket.emit('newEmail',{from:'feven'});

    socket.on('createEmail', function(msg){
        console.log('createEmail', msg);
    });
    socket.on('disconnect',function(){ //server is listening to a disconnect event
        console.log('user disconnected');
    });
    
}); //listen to a connection
server.listen(port, function(){
    console.log('Server is up on '+port);
});