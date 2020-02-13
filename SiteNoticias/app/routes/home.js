module.exports = function(app){

    var sql = "select *,date_format(dtNoticia,'%d/%m/%Y') as Data from noticia"

    app.get('/',(req,res)=>{
        let con = app.configs.banco()

        con.query(sql, (error,result)=>{
            res.render('home/index',{noticias:result})
        })
    })

    app.get('/home', (req,res)=>{
        
        let con = app.configs.banco()

        con.query(sql, (error,result)=>{
            res.render('home/index',{noticias:result})
        })
    })
    
}