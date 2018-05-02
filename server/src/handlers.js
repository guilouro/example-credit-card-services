const CryptoJS = require('crypto-js');

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.MYSQL_HOST || '0.0.0.0',
        user: process.env.MYSQL_USER || 'user',
        password: process.env.MYSQL_PASSWORD || 'credit123',
        database: process.env.MYSQL_DATABASE || 'credit_db',
    },
});

const passwd = 'aedf1924';
const encrypt = value => CryptoJS.AES.encrypt(value, passwd).toString();
const decrypt = value => CryptoJS.AES.decrypt(value, passwd).toString(CryptoJS.enc.Utf8);

const getConvertedObj = (obj, method) => ({
    ...obj,
    company: method(obj.company),
    number: method(String(obj.number)),
    cvv: method(String(obj.cvv)),
});

exports.create = (request, reply) => {
    knex('creditcards').insert(getConvertedObj(request.payload, encrypt))
        .then(lastId => knex('creditcards').where('id', lastId))
        .then(result => reply({ ...result[0] }));
};

exports.list = (request, reply) => {
    knex('creditcards')
        .then(results => reply({ results: results.map(item => getConvertedObj(item, decrypt)) }));
};

exports.get = (request, reply) => {
    knex('creditcards').where('id', request.params.id)
        .then(result => reply({ ...getConvertedObj(result[0], decrypt) }));
};

exports.update = (request, reply) => {
    knex('creditcards').where('id', request.params.id)
        .update(getConvertedObj(request.payload, encrypt))
        .then(res => reply({ success: true, count: res }));
};

exports.delete = (request, reply) => {
    knex('creditcards').where('id', request.params.id).del()
        .then(res => reply({ success: true, count: res }))
        .catch(error => reply({ error }));
};
