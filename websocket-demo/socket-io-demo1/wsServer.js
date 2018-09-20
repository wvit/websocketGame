const app = require('http').createServer();
const io = require('socket.io')(app);
let clientCount = 0;
app.listen(1999);
io.on('connection', socket => {
  clientCount++;
  socket.nickname = 'user' + clientCount;
  io.emit('enter', socket.nickname + '加入聊天');
  socket.on('message', str => {
    console.log(socket.nickname + ' : ' + str);
    io.emit('message', socket.nickname + ' : ' + str);
  });
  socket.on('disconnect', () => {
    io.emit('leave', socket.nickname + '离开聊天')
  });
})