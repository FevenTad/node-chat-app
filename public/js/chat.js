    var socket = io(); //var socket is defined here
    function scrollToBottom () {   //autoscroll added
        // Selectors
        var messages = jQuery('#messages');
        var newMessage = messages.children('li:last-child')
        // Heights
        var clientHeight = messages.prop('clientHeight');
        var scrollTop = messages.prop('scrollTop');
        var scrollHeight = messages.prop('scrollHeight');
        var newMessageHeight = newMessage.innerHeight();
        var lastMessageHeight = newMessage.prev().innerHeight();
      
        if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
          messages.scrollTop(scrollHeight);
        }
      }
    var textbox = jQuery('[name=msg]');
     socket.on('connect', function(){ //socket listens for a connect event
        console.log('connected to server');
         var params = jQuery.deparam(window.location.search);
        socket.emit('join',params,function(err){
            if(err){
                alert(err);
                window.location.href = '/'

            }
            else{
               console.log('good');
            }
        });
     });
     socket.on('disconnect', function(){ //socket listens for a disconnect event
         console.log('disconnected');
     });

     socket.on('newMsg', function(Msg){ //socket listens to a custom event called newEmail
        var formatedtime = moment(Msg.createdAt).format('h:mm a');
        var template = jQuery('#message-template').html();
        var html = Mustache.render(template,{
            text: Msg.text,
            from: Msg.from,
            createdAt: formatedtime
        });
        jQuery('#messages').append(html);
        scrollToBottom();
    });
    jQuery('#msgform').on('submit',(e)=>{ //form listens to a submit event
         e.preventDefault();              //override the default
         socket.emit('crtMsg',{
             from:'User',
             text:textbox.val()
         }, ()=>{
            textbox.val('');
         });
    });
    