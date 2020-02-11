let express = require('express')
let app     = express()

app.set('view engine','ejs')

app.get('/', (req,res)=>{
    res.send("Iniciando com express")
})

app.listen(3000,()=>{
    console.log("Iniciando com express")
})