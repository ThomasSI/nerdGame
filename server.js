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

var gamerList = {};

io.on('connection', function (socket) {

  var gamer = {
   id : socket.id,
   posX : Math.random()*400,
   posY : Math.random()*400,
   color : color[gamerIndex++]
  };

  gamerList[socket.id] = gamer;


  /* add a new player */
  socket.on('join' , function (data) {

   console.log("gamer joined");
   socket.emit( 'new gamer' ,  gamerList );
   socket.broadcast.emit( 'new gamer' ,  gamerList );
  });

  socket.on( 'disconnect' , function (data) {
   console.log(data);
   delete gamerList[socket.id];
   socket.broadcast.emit( 'gamer left' ,  socket.id );
  });

});

console.log('Listening on port 8080');