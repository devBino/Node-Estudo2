let start = function(porta,app){
    app.listen(porta,()=>{
        console.log(`Rodando na Porta: ${porta}`)
    })
}

module.exports = start