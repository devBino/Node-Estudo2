let mysql   = require('mysql')
let con     = mysql.createConnection({
    host: '127.0.0.1',
    user: 'fer',
    password: 'fer',
    database: 'estoque'
})

con.connect()

module.exports = con