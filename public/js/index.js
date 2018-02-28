
     var socket = io(); //var socket is defined here
     socket.on('connect', function(){ //socket listens for a connect event
        console.log('connected to server');
     });
     socket.on('disconnect', function(){ //socket listens for a disconnect event
         console.log('disconnected');
     });

     socket.on('newUser', function(welcomeMsg){ //socket listens to a custom event called newEmail
        console.log('newUser',welcomeMsg);
    });
    socket.on('newMsg', function(Msg){ //socket listens to a custom event called newEmail
        console.log('newMsg',Msg);
    });

