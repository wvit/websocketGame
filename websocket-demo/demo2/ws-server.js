const ws = require('nodejs-websocket');
let clientCount = 0;
const server = ws.createServer(connect => {
  let msg = {};
  clientCount++;
  connect.nickname = 'user' + clientCount;
  msg.type = 'enter';
  msg.data = connect.nickname + '加入聊天';
  broadcast(msg);
  connect.on('text', str => {
    console.log(connect.nickname + ' : ' + str);
    msg.type = 'message';
    msg.data = connect.nickname + ' : ' + str;
    broadcast(msg);
  })
  connect.on('close', (code, reason) => {
    msg.type = 'out';
    msg.data = connect.nickname + '离开聊天';
    broadcast(msg);
  })
  connect.on('error', err => {})
}).listen(1999);

function broadcast(str) {
  server.connections.forEach(connection => {
    connection.sendText(JSON.stringify(str));
  })
}