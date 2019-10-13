let app = require('./modulos/server')
let con = require('./modulos/con')

let startServer = require('./modulos/startServer')
startServer(3000, app)