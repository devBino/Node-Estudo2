let produto = function( app, con ){

    app.get('/produtos',(req,res)=>{
        let sql = "select * from produto"

        con.query(sql, (error, result)=>{
            res.send(result)
        })
        
    })

}

module.exports = produto