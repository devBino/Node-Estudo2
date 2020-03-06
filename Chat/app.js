let app = require('./configs/server')

app.get('/',(req,res)=>{
    res.send({resposta:'iniciando chat...'})
})

app.listen(3000, ()=>{
    console.log('Servidor rodando')
})