module.exports = function(){

    var sql = "select *,date_format(dtNoticia,'%d/%m/%Y') as Data from noticia"

    this.getNoticias = function(con,callback){
        con.query(sql,callback)
    }

    this.salvar = function(params, con, callback){
        con.query('insert into noticia set ?', params, callback)
    }

    return this;

}