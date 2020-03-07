module.exports.inicia_chat = function(app,req,res){
    var dadosForm = req.body
    var strApelido = dadosForm.apelido
    /**
     * deveriar usar um validator de dados
     * mas nesse caso pra esse projeto a biblioteca não funcionou
     * então pra fins de aprendizado poderiamos montar um json com os erros
     * tratados manualmente e renderizando a view com essas mensagens de erros
     * mas o foco aqui é outro, fazer um pequeno chat e trabalhar com web sockets 
    */

    //exemplo simples de validação manual
    var erros = []

    if( strApelido.length < 5 ){
        erros.push("O tamanho não pode ser menor que 8...")
    }

    if( erros.length > 0 ){
        res.render('index',{erros:erros})
        return
    }
    

    app.get('io').emit(
        'msgParaCliente',
        {
            apelido:strApelido,
            'mensagem':`${strApelido} está online`
        }
    )
    
    res.render('chat',{dadosForm:dadosForm})

}

module.exports.get_inicia_chat = function(app,req,res){
    res.render('chat')
}