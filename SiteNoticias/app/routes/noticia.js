module.exports = function(app){
    
    app.get('/noticia',(req,res)=>{
        let con = app.configs.banco()
        let noticiaModel = app.app.models.noticia;

        noticiaModel.getNoticias(con, function(error,result){
            res.render('noticia/index',{noticias:result})
        })
    })

    app.post('/noticia/salvar',(req,res)=>{
        let con = app.configs.banco()
        let noticiaModel = app.app.models.noticia;

        noticiaModel.salvar(req.body, con,function(error,result){
            res.redirect('/noticia')
        })
        
    })

}