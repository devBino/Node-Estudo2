let home = function(app){
    app.get('/',(req,res)=>{
        res.send({
            titulo:'Aula 6',
            objetivo: 'Consign no banco de dados'
        })
    })
}

module.exports = home