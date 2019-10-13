let app = require('./modulos/server')
let con = require('./modulos/banco')

let rotaHome    = require('./app/routes/home')(app)
let rotaProduto = require('./app/routes/produto')(app,con)

let startServer = require('./modulos/startServer')
startServer(3000, app)