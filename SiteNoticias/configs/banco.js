let mysql = require('mysql')
let env = require('./env')

let funcaoDb = function(){

    let con = mysql.createConnection({
        host:env.con.host,
        user:env.con.user,
        password:env.con.user,
        database:env.con.database
    })

    return con

}

module.exports = function(){
    return funcaoDb
}