let startServer = function( porta, app ){
    app.listen(porta, ()=>{
        console.log(`Servidor Rodando na Porta: ${porta}`)
    })
}

module.exports = startServer