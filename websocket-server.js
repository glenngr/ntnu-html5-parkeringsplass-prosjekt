var https = require('https');
var express = require('express');
var WebSocketServerConstructor = require('websocket').server;
const serverPort = 3006;
const config = require('./server-config.js');
const options = config.getConfig();

var testData = [
    { "name": "P1", "totalSpaces": 100, "occupiedSpaces": 98, "location": { "lat": 58.147737, "long": 8.006584 }, "size": 20, "hourlyRate": 34, "description": "Ved snadderkiosken" },
    { "name": "P2", "totalSpaces": 200, "occupiedSpaces": 108, "location": { "lat": 58.148561, "long": 7.989738 }, "size": 25, "hourlyRate": 21, "description": "Grusplass ved slottskvartalet" },
    { "name": "P3", "totalSpaces": 50, "occupiedSpaces": 50, "location": { "lat": 58.14435, "long": 7.991619 }, "size": 15, "hourlyRate": 14, "description": "Ved vestre kiosk" },
    { "name": "P4", "totalSpaces": 70, "occupiedSpaces": 40, "location": { "lat": 58.138972, "long": 7.998729 }, "size": 15, "hourlyRate": 26, "description": "Parkeringshus ved Kilden" }
];

const testDataChangeChance = {};
testDataChangeChance["P1"] = 0.005;
testDataChangeChance["P2"] = 0.007;
testDataChangeChance["P3"] = 0.01;
testDataChangeChance["P4"] = 0.008;


const parkingspaceChangeLog = {}
parkingspaceChangeLog["P1"] = {};
parkingspaceChangeLog["P2"] = {};
parkingspaceChangeLog["P3"] = {};
parkingspaceChangeLog["P4"] = {};

var now = new Date().toLocaleString();
for (ps of testData) {
    parkingspaceChangeLog[ps.name][now] = ps.occupiedSpaces;
}

var app = express();
var server = https.createServer(options, app);
app.get('/history', function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify(parkingspaceChangeLog));
});

var wsServer = new WebSocketServerConstructor({
    httpServer: server,
    autoAcceptConnections: true
});

wsServer.on('open', function open() {
    console.log('new incoming websocket connection. Greeting with data:', testData);
    wsServer.send(serialize(testData));
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
        testData = applyRandomOccupiedSpaces(testData);
        console.log('emitting:', testData);
        console.log('current changelog:', parkingspaceChangeLog);
        emitToAll(serialize(testData));
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

function serialize() {
    return JSON.stringify(testData);
}


function applyRandomOccupiedSpaces(data) {
    var now = new Date().toLocaleString();
    for (ps of testData) {
        if (shouldApplyRandomData(ps.name)) {
            var occupiedSpaces = randomIntFromBetween(0, ps.totalSpaces);
            ps.occupiedSpaces = occupiedSpaces;
            parkingspaceChangeLog[ps.name][now] = ps.occupiedSpaces;
        }
    }

    return data;
}

function shouldApplyRandomData(parkingSpaceName) {
    var chance = Math.random();
    return testDataChangeChance[parkingSpaceName] > chance;
}

function randomIntFromBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
