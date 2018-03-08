//server side

const path= require('path');
const http= require('http');
var express = require('express');
var app = express();
const socketIO=require('socket.io');
var {generator} = require('./utils/message.js');
var {isRealString} = require('./utils/validation.js');
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

     socket.on('join', (params,callback)=>{
         if(!isRealString(params.name) || !isRealString(params.room)){
             callback('name and rooms required');
         }
         socket.join(params.room);
         socket.emit('newMsg',generator('Admin', 'welcome to the app'));
         socket.broadcast.to(params.room).emit('newMsg',generator('Admin', `${params.name} has joined`));

         callback();
     });
    socket.on('crtMsg',function(msg,callback){  //after crtMsg is listened a callback has
        console.log('newMsg',msg);              //to be sent back to the emitter
        io.emit('newMsg', generator(msg.from,msg.text));
        callback();
    });
    socket.on('disconnect',function(){ //server is listening to a disconnect event
        console.log('user disconnected');
    });

}); //listen to a connection
server.listen(port, function(){
    console.log('Server is up on '+port);
});