process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');

if (!cluster.isMaster) {
  const express = require('express');
  const crypto = require('crypto');
  const app = express();

  console.log('Child');

  app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      res.send('hej hej!');
    });
  });

  app.get('/fast', (req, res) => {
    doSomething(0);
    res.send('hej hej Fast!');
  });

  app.listen('3000');
} else {
  console.log('Master');
  cluster.fork();
  cluster.fork();
}
