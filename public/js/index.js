

var socket = io();

socket.on('connect', function () {
    console.log('client connected to server');
//emitting events to server
   
});

socket.on('disconnect', function () {
    console.log('client disconnected from server');
});
//do something with the data emitted by server
//listening to events from server
socket.on('newMessage', (message)=>{
    console.log('newMessage', message);
    //create an element with jQuery
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
})

jQuery('#message-form').on('submit', function(e){
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function(){

    })
})