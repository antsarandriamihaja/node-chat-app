const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname, '../public');
const express = require('express');
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
//communicate between server and client
var io = socketIO(server);
//config middleware
app.use(express.static(publicPath));

//register an event listener using io
//built-in event

io.on('connection', (socket)=>{
console.log('new user connected');
socket.on('disconnect', () =>{
console.log('client disconnected');
});
})

server.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})