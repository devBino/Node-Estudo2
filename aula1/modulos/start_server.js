let start = function( porta, app, msg ){
    
    app.listen(porta, ()=>{
        msg(` Servidor Rodando na Porta: ${porta}`)
    })

}

module.exports = start