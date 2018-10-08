const app = require('http').createServer();

const io = require('socket.io')(app);

app.listen(2001, '192.168.0.106');

io.on('connection', socket => {
  console.log('已连接');

  io.emit('enter', '对方加入游戏');

  socket.on('message', data => {
    socket.broadcast.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('已离开');
    io.emit('leave', '对方离开游戏');
  });

});