module.exports = function(app){

    app.get('/',(req,res)=>{
        app.app.controllers.home.pagina_inicio(app,req,res)
    })

    app.get('/home', (req,res)=>{
        app.app.controllers.home.pagina_home(app,req,res)
    })
    
}