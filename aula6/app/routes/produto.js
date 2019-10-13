let produto = function(app){

    app.get('/produto',(req,res)=>{

        let con = app.modulos.banco()

        con.query('select * from produto', (error,result)=>{
            res.send(result)
        })
    })

}

module.exports = produto