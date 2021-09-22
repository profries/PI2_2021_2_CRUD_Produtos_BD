const repositorio = require('./repository/produtoRepository')

/*repositorio.inserir({nome:"Prod5",preco:80},
    (err, produto) => {
        if(err) console.log("Erro ao acessar o BD");
        else {
            console.log("Produto add: ");
            console.log(produto);
            
        }
    }
);*/

/*repositorio.atualizar(5, {nome:"Prod5",preco:90},
    (err, produto) => {
        if(err) console.log("Erro ao acessar o BD");
        else {
            console.log("Produto atualizado: ");
            console.log(produto);           
        }
    }
);*/
/*repositorio.deletar(1, (err, produto) => {
    if(err) {
        console.log(err);    
    }
    else {
        console.log("Produto removido 1:");
        console.log(produto);
    }
})*/

repositorio.listar((err, listaProdutos) => {
    if(err) console.log("Erro ao acessar o BD");
    else {
        console.log("Lista de Produtos:");
        console.log(listaProdutos);
    }
});

repositorio.buscarPorId(3, (err, produto) => {
    if(err) {
        console.log(err);    
    }
    else {
        console.log("Produto com id 3:");
        console.log(produto);
    }
})