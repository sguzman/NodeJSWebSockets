const WebSocket = require('ws');
const util = require('util');

const ws = new WebSocket('ws://localhost:8888');

ws.on('open', function() {
	ws.send('something');
});

ws.on('message', function(data) {
	console.log(data);
});

process.stdin.on('data', function (text) {
  console.log('received data:', util.inspect(text));
});
