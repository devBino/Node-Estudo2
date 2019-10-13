let home = function(app){
    app.get('/', (req,res)=>{
        
        let msg = {
            titulo:'Aula 4',
            objetivo:'Refactoring do methodo de conexão com banco de dados'
        }

        res.send(msg)
    })
}

module.exports = home