module.exports = function(app){
    
    app.get('/noticia',(req,res)=>{
        app.app.controllers.noticia.frm_cad_noticia(app, req, res)
    })

    app.post('/noticia/salvar',(req,res)=>{
        app.app.controllers.noticia.salvar(app,req,res)
    })

    app.get('/noticia/deletar/:id',(req,res)=>{
        app.app.controllers.noticia.deletar(app,req,res)
    })

}