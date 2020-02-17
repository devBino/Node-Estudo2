function Noticia(connection){
    this._con = connection

}

Noticia.prototype.getNoticias = function(callback){
    var sql = "select *,date_format(dtNoticia,'%d/%m/%Y') as Data from noticia"
    this._con.query(sql,callback)
}

Noticia.prototype.salvar = function(params, callback){
    this._con.query('insert into noticia set ?', params, callback)
}

Noticia.prototype.isEmpty = function(param){
    returnParam = false
    
    if( param == undefined || param == null || param == '' ){
        returnParam = true
    }

    return returnParam
}

module.exports = function(){
    return Noticia
}