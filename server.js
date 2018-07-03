'use strict';

const express = require('./express');
const config = require('./config');

const server = express.listen(config.port, () => {
    const env = process.env.NODE_ENV;
    const port = server.address().port;
    console.log(`Server started in "${env}" mode on port ${port}`);
});