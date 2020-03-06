module.exports = function(app){

    app.get('/',(req,res)=>{
        app.app.controllers.home.listar_noticias(app,req,res)
    })

    app.get('/home', (req,res)=>{
        app.app.controllers.home.listar_noticias(app,req,res)
    })
    
}