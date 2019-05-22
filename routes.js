const requestHandler = (req, res) => {
    const {url, method} = req;

    if (url === '/') {
        const response = '<html><head><title>Hi there!</title></head><body><h1>I love Node</h1><a href="/users">Users</a><form action="/create-user" method="POST"><input type="text" title="name" name="name" maxlength="100" /><button type="submit">Create User</button></form></body></html>';
        res.write(response);
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(`Data Received: ${message}`);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    }

    if (url === '/users') {
        const response = '<html><head><title>Hi there!</title></head><body><h1>Users List</h1><a href="/">Home</a><ul><li>Mark Gotera</li><li>Pierre de la font</li><li>Carla Mariscal</li><li>Timoteo Semilla</li><li>Sergay Noesmalo</li></ul></body></html>\'';
        res.write(response);
        return res.end();
    }

};

module.exports = {
    handler: requestHandler
};