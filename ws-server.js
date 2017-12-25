const WebSocket = require('ws');

const wss = new WebSocket.Server({
  port: 8888
});

let clientCount = 0;
wss.on('connection', function(ws) {
  console.log(`At ${wss.clients.size} clients`);
  ws.on('message', function(message) {
    console.log('received %s', message);
  });

  ws.send('something');
});
