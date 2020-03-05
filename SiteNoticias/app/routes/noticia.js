module.exports = function(app){
    
    app.get('/noticia',(req,res)=>{
        app.app.controllers.noticia.frm_cad_noticia(app, req, res)
    })

    app.post('/noticia/salvar',(req,res)=>{
        app.app.controllers.noticia.salvar(app,req,res)
    })

}