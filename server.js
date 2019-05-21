const path = require('path');
const http = require('http');
const os = require('os');
const { handler } = require('./routes');


const server = http.createServer(handler);

server.listen('6969', 'localhost');