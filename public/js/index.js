

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

socket.on('newLocationMessage', function(message){
    var li = jQuery('<li></li>');
    var a = jQuery('<a target="_blank">My current location </a>');

    li.text(`${message.from}: `);
    a.attr('href', message.url);
    li.append(a);
     jQuery('#messages').append(li);
})

var messageTextbox = jQuery('[name=message]');
jQuery('#message-form').on('submit', function(e){
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: messageTextbox.val()
    }, function(){
        //clearing input form once message is sent.
messageTextbox.val('');
    })
})
var locationButton = jQuery('#send-location');
locationButton.on('click', function(){
    if (!navigator.geolocation){
        return alert('Geolocation is not supported by your browser');
    }
    //disable send location button during query
    locationButton.attr('disabled', 'disabled').text('Sending location...');
    //find coordinates based on browser
    navigator.geolocation.getCurrentPosition(
        function(position){
            socket.emit('createLocationMessage', {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
            locationButton.removeAttr('disabled').text('Send location');
        }, 
        function(){
            alert('Unable to fetch location');
            locationButton.removeAttr('disabled').text('Send location');
        }
    )
})

