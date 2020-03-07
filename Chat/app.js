let app = require('./configs/server')

var server = app.listen(3000, ()=>{
    console.log('Servidor rodando')
})

let io = require('socket.io').listen(server)

io.on('connection',(socket)=>{
    console.log('inicio via socket...')

    socket.on('disconnect',()=>{
        console.log('saiu fora...')
    })
})