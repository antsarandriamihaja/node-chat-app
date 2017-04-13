const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;
const {generateMessage,generateLocationMessage} = require('./utils/message');
var app = express();
var server = http.createServer(app);
//communicate between server and client
var io = socketIO(server);
//config middleware
app.use(express.static(publicPath));

//register an event listener using io
//built-in event

io.on('connection', (socket) => {
    console.log('new user connected');
    //emitting and listening to events to/from client
    console.log(`New client connected id = ${socket.id}.`)
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));
    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text))
        callback('This is from the server');
    });
    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
    })
    io.to('/#SWOEFBgwyrD0ibkjAAAB').emit('The first one');
    socket.on('disconnect', () => {
        console.log('client disconnected');
    });
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})