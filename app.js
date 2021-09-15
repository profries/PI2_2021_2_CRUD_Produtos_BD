const repositorio = require('./repository/produtoRepository')

repositorio.listar(
    function(err, listaProdutos) {
        if(err) console.log("Erro ao acessar o BD");
        else {
            console.log(listaProdutos);
        }
});
