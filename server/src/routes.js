const handlers = require('./handlers');

const apiVersion = '/api/v1';

module.exports = [
    {
        method: 'GET',
        path: `${apiVersion}/cards`,
        handler: handlers.list,
    },
    {
        method: 'POST',
        path: `${apiVersion}/cards`,
        handler: handlers.create,
    },
    {
        method: 'GET',
        path: `${apiVersion}/cards/{uid}`,
        handler: handlers.get,
    },
    {
        method: 'PUT',
        path: `${apiVersion}/cards/{uid}`,
        handler: handlers.update,
    },
    {
        method: 'DELETE',
        path: `${apiVersion}/cards/{uid}`,
        handler: handlers.delete,
    },
];
