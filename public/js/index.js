

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
})
