let app = require('./configs/server')

let rotaHome    = require('./app/routes/home')(app)
let rotaTec     = require('./app/routes/tecnologia')(app)
let rotaEco     = require('./app/routes/economia')(app)

app.listen(3000, ()=>{
    console.log('Servidor rodando')
})