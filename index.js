'use strict'

process.on('SIGTERM', () => {
  console.log('Killing latter')
  setTimeout(() => {}, 60000)
});

var http = require('http');

http.createServer(function (request, response) {}).listen(1337);
