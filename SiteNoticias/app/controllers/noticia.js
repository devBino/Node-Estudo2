module.exports.frm_cad_noticia = function(app,req,res){
    var con = app.configs.banco()
    let noticiaModel = new app.app.models.Noticia(con);

    noticiaModel.getNoticias(function(error,result){
        res.render('noticia/index',{noticias:result,erros:""})
    })
}

module.exports.salvar = function(app,req,res){
    let params = req.body
    let con = app.configs.banco()
    let noticiaModel = new app.app.models.Noticia(con);

    let erro = ''

    if( noticiaModel.isEmpty(params.dsTitulo) ){
        res.render('noticia/index',{noticias:{},erro:{msg:erro}})
        return
    }

    noticiaModel.salvar(req.body,function(error,result){
        res.redirect('/noticia')
    })
}