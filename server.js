/**
 * Created by thomas.schulz on 07.11.2014.
 */


var serverPort = 12345;

/*
 todo install all npm libs
 use npm install
 use python 2.7 and Visual Studio Express 2013 for Windows Desktop. if not installed
 look at https://npmjs.org/package/serialport
 section To install for more information
 */
console.log("start node server");






var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);
app.use(express.static( path.join(__dirname, '/client') )); //  "public" off of current is rootg

io.on('connection', function (socket) {


  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
   console.log(data);
  });


});

console.log('Listening on port 8080');