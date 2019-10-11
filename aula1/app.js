let app = require('./modulos/server')
let msg = require('./modulos/msg')

let routeHome   = require('./app/routes/home')(app)

let startServer = require('./modulos/start_server')

startServer(3000, app, msg)