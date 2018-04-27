const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.MYSQL_HOST || '0.0.0.0',
        user: process.env.MYSQL_USER || 'user',
        password: process.env.MYSQL_PASSWORD || 'upnid123',
        database: process.env.MYSQL_DATABASE || 'upnid_db',
    },
});

exports.create = (request, reply) => {
    knex('creditcards').insert(request.payload)
        .then(lastId => knex('creditcards').where('id', lastId))
        .then(result => reply({ ...result[0] }));
};

exports.list = (request, reply) => {
    knex('creditcards')
        .then(results => reply({ results }));
};

exports.get = (request, reply) => {
    knex('creditcards').where('id', request.params.id)
        .then(result => reply({ ...result[0] }));
};

exports.update = (request, reply) => {
    knex('creditcards').where('id', request.params.id)
        .update(request.payload)
        .then(res => reply({ success: true, count: res }))
};

exports.delete = (request, reply) => {
    knex('creditcards').where('id', request.params.id).del()
        .then(res => reply({ success: true, count: res }))
        .catch(error => reply({ error }));
};
