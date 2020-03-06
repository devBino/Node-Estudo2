function Noticia(connection){
    this._con = connection

}

Noticia.prototype.get_noticias = function(callback){
    var sql = "select *,date_format(dtNoticia,'%d/%m/%Y') as Data from noticia order by id desc"
    this._con.query(sql,callback)
}

Noticia.prototype.salvar = function(params, callback){
    this._con.query('insert into noticia set ?', params, callback)
}

Noticia.prototype.deletar = function(id, callback){
    var sql = `delete from noticia where id = ${id} limit 1`
    this._con.query(sql,callback)
}

Noticia.prototype.is_empty = function(param){
    returnParam = false
    
    if( param == undefined || param == null || param == '' ){
        returnParam = true
    }

    return returnParam
}

module.exports = function(){
    return Noticia
}