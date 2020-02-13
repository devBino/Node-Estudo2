let mysql = require('mysql')

let funcaoDb = function(){
    let con = mysql.createConnection({
        host:'127.0.0.1',
        user:'fer',
        password:'fer',
        database:'noticias'
    })

    return con

}

module.exports = function(){
    return funcaoDb
}