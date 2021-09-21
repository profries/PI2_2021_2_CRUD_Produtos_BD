const repositorio = require('./repository/produtoRepository')

repositorio.inserir({nome:"Prod5",preco:80},
    (err, produto) => {
        if(err) console.log("Erro ao acessar o BD");
        else {
            console.log("Produto add: ");
            console.log(produto);
            
        }
    }
);

repositorio.listar((err, listaProdutos) => {
    if(err) console.log("Erro ao acessar o BD");
    else {
        console.log("Lista de Produtos:");
        console.log(listaProdutos);
    }
});

