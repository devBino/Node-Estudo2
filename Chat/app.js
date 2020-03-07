let app = require('./configs/server')

var server = app.listen(3000, ()=>{
    console.log('Servidor rodando')
})

let io = require('socket.io').listen(server)

app.set('io',io)

io.on('connection',(socket)=>{
    
    socket.on('disconnect',()=>{
    
    })

    socket.on('msgParaServidor',(data)=>{
        socket.emit('msgParaCliente',{
            apelido:data.apelido,
            mensagem:data.mensagem
        })

        socket.broadcast.emit('msgParaCliente',{
            apelido:data.apelido,
            mensagem:data.mensagem
        })


        socket.emit('participantesParaCliente',{
            apelido: data.apelido
        })

        socket.broadcast.emit('participantesParaCliente',{
            apelido: data.apelido
        })

    })

})