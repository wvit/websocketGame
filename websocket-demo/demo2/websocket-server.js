const ws = require('nodejs-websocket');
const server = ws.createServer(connect => {
  console.log('创建成功');
  connect.on('text', str => {
    console.log('send :' + str);
    connect.sendText(str.toUpperCase());
  })
  connect.on('close', (code, reason) => {
    console.log('已断开连接');
  })
}).listen(1999);