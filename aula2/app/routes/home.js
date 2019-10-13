let home = function( app ){

	app.get('/', (req,res)=>{
		res.send('Home em modulo')
	})

	app.get('/home', (req,res)=>{
		res.render('home/index')
	})

}

module.exports = home