module.exports = function(app){

    app.get('/tecnologia',(req,res)=>{
        res.render('tecnologia/index')
    })

}