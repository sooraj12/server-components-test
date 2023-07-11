'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT;

app
  .listen(PORT, () => {
    console.log(`listening to server at ${PORT}`);
  })
  .on('error', function (error) {
    // handle errors in starting server
    if (error.syscall !== 'listen') {
      throw error;
    }

    switch (error.code) {
      case 'EACCES':
        process.exit(1);
      case 'EADDRINUSE':
        console.error(PORT + ' is already in use');
        process.exit(1);
      default:
        throw error;
    }
  });
