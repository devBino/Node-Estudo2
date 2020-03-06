function Home(connection){
    this._con = connection
}

Home.prototype.listar_noticias = function(callback){
    var sql = "select *,date_format(dtNoticia,'%d/%m/%Y') as Data from noticia order by id desc"
    this._con.query(sql,callback)
}

module.exports = function(){
    return Home
}