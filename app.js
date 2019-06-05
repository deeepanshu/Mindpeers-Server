const express = require('./services/express');
const credentials = require('./config/credentials');
const routes = require('./api');
const http = require('http');
const mongoose = require('./services/mongoose');
const app = express(credentials.apiRoot, routes);


mongoose.connect(credentials.mongoURI, { useNewUrlParser: true })

const server = http.createServer(app);

setImmediate(() => {
    server.listen(credentials.port, credentials.ip, () => {
        console.log('Express server listening on http://%s:%d', credentials.ip, credentials.port);
    })
})