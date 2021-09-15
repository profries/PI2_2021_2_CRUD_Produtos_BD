const { Client } = require('pg');

const conexao = {
    host: 'localhost',
    port: 5432,
    database: 'crud_produtos',
    user: 'postgres',
    password: 'postgres'
};

//Conexao com banco de dados
exports.listar = function(callback) {

    const cliente = new Client(conexao);
    cliente.connect();
    cliente.query('SELECT * FROM produto', function (err, res) {
        callback(err,res.rows);
        cliente.end();
    });
}