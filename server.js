const express = require('express')
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// my own route
const routing = require('./route.js')

app.use(express.static('public'));

// routes
routing.routing(app);

// socket.io server
io.on('connection', function (socket) {

  console.log(socket.id);
  socket.on('sendToServer', function (data) {
    console.log(data);
    io.sockets.emit('sendToCLient', { hello: data.mes });
  });

  socket.on('sendTypingToServer', function (data) {
    console.log(data);
    socket.broadcast.emit('sendTypingToOthers', { userid: socket.id });
  });

});

// listen to port
server.listen(3000 || process.env.PORT, () => console.log('Example app listening on port 3000!'));
