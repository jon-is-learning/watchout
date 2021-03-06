var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);



app.use('/', express.static(__dirname + '/client/'));

app.get('/', function (req, res) {
  res.sendfile(__dirname + 'client/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});


server.listen(3000, function () {
  console.log('running server on port 3000');
});

