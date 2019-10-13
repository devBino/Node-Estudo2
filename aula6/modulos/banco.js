let mysql   = require('mysql')

let conMysql = function(){
    console.log('Conectou com Banco!')
    return mysql.createConnection({
        host:'127.0.0.1',
        user:'fer',
        password:'fer',
        database:'estoque'
    })

}

module.exports = function(){
    console.log('Carregou a Conexão!!')
    return conMysql
}