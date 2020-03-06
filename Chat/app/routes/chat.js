module.exports = function(app){

    app.post('/chat',(req,res)=>{
        app.app.controllers.chat.inicia_chat(app,req,res)
    })

    app.get('/chat',(req,res)=>{
        app.app.controllers.chat.get_inicia_chat(app,req,res)
    })

}