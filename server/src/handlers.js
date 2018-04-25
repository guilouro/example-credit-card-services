const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '0.0.0.0',
        user: 'user',
        password: 'upnid123',
        database: 'upnid_db',
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
