module.exports.frm_cad_noticia = function(app,req,res){
    var con = app.configs.banco()
    let noticiaModel = new app.app.models.Noticia(con);

    noticiaModel.get_noticias(function(error,result){
        res.render('noticia/index',{noticias:result,erros:""})
    })
}

module.exports.salvar = function(app,req,res){
    let params = req.body
    let con = app.configs.banco()
    let noticiaModel = new app.app.models.Noticia(con);

    let erro = ''

    if( noticiaModel.is_empty(params.dsTitulo) ){
        res.render('noticia/index',{noticias:{},erro:{msg:erro}})
        return
    }

    noticiaModel.salvar(req.body,function(error,result){
        res.redirect('/noticia')
    })
}

module.exports.deletar = function(app,req,res){
    let params = req.params
    let con = app.configs.banco()
    let noticiaModel = new app.app.models.Noticia(con)

    noticiaModel.deletar(params.id, function(error, result){
        res.redirect('/noticia')
    })
}