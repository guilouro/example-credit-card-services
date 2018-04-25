const handlers = require('./handlers');
const Joi = require('joi');

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
        config: {
            validate: {
                payload: {
                    number: Joi.number().required(),
                    cvv: Joi.number().required(),
                    expiration: Joi.date().required(),
                    company: Joi.string().required(),
                },
            },
        },
    },
    {
        method: 'GET',
        path: `${apiVersion}/cards/{id}`,
        handler: handlers.get,
    },
    {
        method: 'PUT',
        path: `${apiVersion}/cards/{id}`,
        handler: handlers.update,
        config: {
            validate: {
                payload: {
                    number: Joi.number(),
                    cvv: Joi.number(),
                    expiration: Joi.date(),
                    company: Joi.string(),
                },
            },
        },
    },
    {
        method: 'DELETE',
        path: `${apiVersion}/cards/{id}`,
        handler: handlers.delete,
    },
];
