var http = require('http')

var server = http.createServer(function(req,res){
    console.log('Respondendo requisições http')
    var categoria = req.url

    if( categoria == '/tecnologia' ){
        res.end("<html><body><center>Respondendo Requisições de teconologia</center><html><body>")
    }else{
        res.end("<html><body><center>Respondendo a outras Requisições</center><html><body>")
    }

})

server.listen(3000)