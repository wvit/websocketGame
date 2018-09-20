const app = require('http').createServer()
const io = require('socket.io')(app);

app.listen(1999);



io.on('connection', function (socket) {
  socket.emit('news', {
    hello: 'world'
  });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});