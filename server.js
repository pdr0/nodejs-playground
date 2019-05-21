const path = require('path');
const http = require('http');
const os = require('os');
const routes = require('./routes');


const server = http.createServer(routes);

server.listen('6969', 'localhost');