const cluster = require('cluster');

if (!cluster.isMaster) {
  const express = require('express');
  const app = express();

  console.log('Child');

  const doSomething = (duration) => {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  };

  app.get('/', (req, res) => {
    doSomething(5000);
    res.send('hej hej!');
  });

  app.get('/fast', (req, res) => {
    doSomething(0);
    res.send('hej hej Fast!');
  });

  app.listen('3000');
} else {
  console.log('Master');
  cluster.fork();
}
