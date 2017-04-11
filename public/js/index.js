

var socket = io();

socket.on('connect', function () {
    console.log('client connected to server');
//emitting events to server
    socket.emit('createMessage', {
        from: 'antsa@gmail.com',
        text: 'okay, we can have sushi tonight since you insist'
    })
});

socket.on('disconnect', function () {
    console.log('client disconnected from server');
});
//do something with the data emitted by server
//listening to events from server
socket.on('receivedEmail', (email)=>{
    console.log('receivedEmail', email);
})
