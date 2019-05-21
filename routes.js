const fs = require('fs');

const requestHandler = (req, res) => {
    const {url, method} = req;

    if (url === '/') {
        res.write('<html><head><title>Hi there!</title></head><body><h1>I love Node</h1><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body></html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(`Chunk: ${chunk}`);
            body.push(chunk)
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('./logs/message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });

    }
};

module.exports = {
    handler: requestHandler
};