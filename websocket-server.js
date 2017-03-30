var https = require ('https');
var express = require('express');
var WebSocketServerConstructor = require('websocket').server;
// var ws = require('nodejs-websocket');
const serverPort = 3006;
const config = require('./server-config.js');
const options = config.getConfig();

const testData = [
    { "name": "P1", "totalSpaces": 100, "occupiedSpaces": 98, "location": { "lat": 58.147737, "long": 8.006584 }, "size": 20, "hourlyRate": 34, "description": "Ved snadderkiosken" },
    { "name": "P2", "totalSpaces": 200, "occupiedSpaces": 108, "location": { "lat": 58.148561, "long": 7.989738 }, "size": 25, "hourlyRate": 21, "description": "Grusplass ved slottskvartalet"  },
    { "name": "P3", "totalSpaces": 50, "occupiedSpaces": 50, "location": { "lat": 58.14435, "long": 7.991619 }, "size": 15, "hourlyRate": 14, "description": "Ved vestre kiosk" },
    { "name": "P4", "totalSpaces": 70, "occupiedSpaces": 40, "location": { "lat": 58.138972, "long": 7.998729 }, "size": 15, "hourlyRate": 26, "description": "Parkeringshus ved Kilden"  }
];

var app = express();

var server = https.createServer(options, app);

var wsServer = new WebSocketServerConstructor({
	httpServer: server,
	autoAcceptConnections: true
});
    wsServer.on('close', function (code, reason) {
        console.log('Data connection closed.', new Date().toLocaleTimeString(), 'code: ', code);
    });

    wsServer.on('error', function (err) {
        // only throw if something else happens than Connection Reset
        if (err.code !== 'ECONNRESET') {
            console.log('Server error:', err);
        }
    });

server.listen(serverPort);

// Send parking space data every 5th second
setInterval(function () {
    // Only emit numbers if there are active connections
    if (hasConnections()) {
        var data = getParkingSpaceData();
        console.log(data);
        emitToAll(data);
    }
}, 5000);

function hasConnections() {
    return wsServer.connections.length > 0;
}

function emitToAll(message) {
    wsServer.connections.forEach((function (conn) {
        conn.send(message)
    }));
}

function getParkingSpaceData() {
    //(Math.floor(Math.random() * 10000) + 1).toString();
    return JSON.stringify(testData);
}
