module.exports = function(app){

    app.get('/economia',(req,res)=>{
        res.render('economia/index')
    })

}