const app = require('http').createServer();
const io = require('socket.io')(app);
app.listen(1999);
io.on('connection', socket => {
  io.emit('enter', '对方加入游戏');
  socket.on('message', data => {
    console.log(data);
    io.emit('message', data);
  });
  socket.on('disconnect', () => {
    io.emit('leave', '对方离开游戏');
  });
});