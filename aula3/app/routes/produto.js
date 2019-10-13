let produto = function(app, con){
    
    app.get('/produto', (req,res)=>{
        let sql = 'select * from produto'

        con.query(sql, (error,result)=>{
            res.render('produto/index', {produtos:result})
        })

    })

}

module.exports = produto