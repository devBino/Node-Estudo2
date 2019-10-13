let home = function(app){
    app.get('/',(req,res)=>{
        res.send({
            titulo: 'Aula 5',
            objetivo: 'Instalando consign'
        })
    })
}

module.exports = home