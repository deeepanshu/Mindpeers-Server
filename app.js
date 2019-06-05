const express = require('./services/express');
const morgan  = require('morgan');
const credentials = require('./config/credentials');
const routes = require('./api');
const http = require('http');

const app = express(credentials.apiRoot, routes);

const server = http.createServer(app);

setImmediate(() => {
    server.listen(credentials.PORT, credentials.ip, () => {
        console.log('Express server listening on http://%s:%d', credentials.ip, credentials.PORT);
    })
})