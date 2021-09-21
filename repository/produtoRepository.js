const { Client } = require('pg');

const conexao = {
    host: 'localhost',
    port: 5432,
    database: 'crud_produtos',
    user: 'postgres',
    password: 'postgres'
};

//Conexao com banco de dados
exports.listar = (callback) => {

    const cliente = new Client(conexao);
    cliente.connect();
    cliente.query('SELECT * FROM produto', (err, res) => {
        callback(err,res.rows);
        cliente.end();
    });
}

exports.inserir = (produto, callback) => {
    const sql = "INSERT INTO produto(nome, preco) VALUES ($1, $2) RETURNING *";
    const values = [produto.nome, produto.preco];

    const cliente = new Client(conexao);
    cliente.connect();
    cliente.query(sql, values, (err, res) => { 
        callback(err, res.rows[0]);
        cliente.end();
    });

}

