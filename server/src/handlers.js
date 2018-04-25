const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '0.0.0.0',
    user: 'user',
    password: 'upnid123',
    database: 'upnid_db',
});

exports.create = (request, reply) => reply({ teste: 'Created' });

exports.list = (request, reply) => {
    connection.connect();
    connection.query('SELECT * FROM creditcards ORDER BY company', (error, results) => {
        if (error) throw error;
        reply({ teste: 'Listed', results });
    });
};

exports.get = (request, reply) => reply({ teste: 'Got' });
exports.update = (request, reply) => reply({ teste: 'Updated' });
exports.delete = (request, reply) => reply({ teste: 'Deleted' });
