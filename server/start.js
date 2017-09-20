/*
  Lint rules go here
*/
const express = require('express');
const app = express();
const logger = require('./utils/logger');

app.get('/', (req,res) => {
    res.sendFile(__dirname + '../../client/build/bundle.js')
});

app.listen(3000, () => {
    logger.warn("Server listening on port 3000.");
});
