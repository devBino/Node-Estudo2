module.exports = function(app){
    
    app.get('/',(req,res)=>{

        let mysql   = require('mysql')
        let con     = mysql.createConnection({
            host:'127.0.0.1',
            user:'fer',
            password:'fer',
            database:'pinturas'
        })

        con.connect()
        
        con.query('select * from pt_servico', function(error,result){
            res.render('home/index',{servicos:result})
        })
    })

    app.get('/home', (req,res)=>{
        res.render('home/index')
    })
    
}