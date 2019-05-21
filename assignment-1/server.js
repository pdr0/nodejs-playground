const http = require('http');
const config = require('./config');
const { handler } = require('./routes');

const server = http.createServer(handler);

server.listen(config.port, config.host);