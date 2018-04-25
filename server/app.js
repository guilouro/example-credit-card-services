'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
    port: 8080,
    host: '0.0.0.0',
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, response) => response({ teste: 'Hello' }),
});

server.start((err) => {
    if (err) throw err;
    console.log(`Server is running in: ${server.info.uri}`);
});
