const Hapi = require('hapi');
const routerRegister = require('hapi-router');

const server = new Hapi.Server();

server.connection({ port: 8080, host: '0.0.0.0', routes: { cors: true } });

server.register({
    register: routerRegister,
    options: {
        routes: 'src/routes.js',
    },
});

if (require.main === module) {
    server.start((err) => {
        if (err) throw err;
        console.log(`Server is running in: ${server.info.uri}`);
    });
} else {
    module.exports = server;
}
