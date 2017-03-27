var ws = require('nodejs-websocket');
const serverPort = 3006;

var wsServer = ws.createServer(function (conn) {
	console.log('New client connection established, ', new Date().toLocaleTimeString());

	conn.on('close', function (code, reason) {
		console.log('Data connection closed.', new Date().toLocaleTimeString(), 'code: ', code);
	});

	conn.on('error', function (err) {
		// only throw if something else happens than Connection Reset
		if (err.code !== 'ECONNRESET') {
			console.log('Server error:', err);
		}
	})
}).listen(serverPort, function () {
	console.log('Random number server running on localhost:' + serverPort);
});

// 4. Generate a random number between 0-10,000, every second
setInterval(function () {
	// Only emit numbers if there are active connections
	if (wsServer.connections.length > 0) {
		var randomNumber = (Math.floor(Math.random() * 10000) + 1).toString();
		console.log(randomNumber);
		wsServer.connections.forEach((function (conn) {
			conn.send(randomNumber)
		}));
	}
}, 1000);