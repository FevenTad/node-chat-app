
     var socket = io(); //var socket is defined here
     socket.on('connect', function(){ //socket listens for a connect event
         console.log('connected to server');
   //we want emit the event as soon as the client is connected
         socket.emit('createEmail',{to:'fev'});
     });
     socket.on('disconnect', function(){ //socket listens for a disconnect event
         console.log('disconnected');
     });

     socket.on('newEmail', function(email){ //socket listens to a custom event called newEmail
        console.log('NewEmail', email);
    });
