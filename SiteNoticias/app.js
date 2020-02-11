let express = require('express')
let app     = express()
let teste   = require('./mod_teste')

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('Rodando Site de Noticias')
})

app.get('/tecnologia',(req,res)=>{
    res.render('tecnologia/index')
})

app.get('/home', (req,res)=>{
    res.render('home/index')
})

app.get('/economia', (req,res)=>{
    res.render('economia/index')    
})


app.listen(3000, ()=>{
    teste(10,29)
})