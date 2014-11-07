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






var path = require('path');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);
app.use(express.static( path.join(__dirname, '/client') )); //  "public" off of current is rootg


var color = [
 '#808080',
 '#000000',
 '#FF0000',
 '#FFFF00',
 '#008000',
 '#00FFFF',
 '#0000FF',
 '#FF00FF'
];
var gamerIndex = 0;


io.on('connection', function (socket) {

  console.log( "user connect" );

  var gamer = {
   id : socket.id,
   posX : Math.random()*400,
   posY : Math.random()*400,
   color : color[gamerIndex++]
  };

  socket.emit('new gamer', gamer );
  socket.broadcast.emit( 'new gamer' ,gamer );

  socket.on('join' , function (data) {
   console.log("join" , data);

   socket.emit('new gamer', gamer );
   socket.broadcast.emit( 'new gamer' ,gamer );
  });

});

console.log('Listening on port 8080');