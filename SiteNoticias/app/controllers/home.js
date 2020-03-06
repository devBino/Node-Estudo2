module.exports.pagina_inicio = function(app,req,res){
    res.render('home/index')
}
module.exports.listar_noticias = function(app,req,res){
    var con = app.configs.banco()
    let homeModel = new app.app.models.Home(con)

    homeModel.listar_noticias(function(error,result){
        res.render('home/index',{noticias:result})
    })
}