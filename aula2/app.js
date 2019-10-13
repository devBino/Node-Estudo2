let app = require('./modulos/server')
let con = require('./modulos/banco')
let msg = require('./modulos/msg')

let rotaHome    = require('./app/routes/home')(app)
let rotaProduto = require('./app/routes/produtos')(app, con)

let startServer = require('./modulos/start_server')
startServer(3000,app,msg)