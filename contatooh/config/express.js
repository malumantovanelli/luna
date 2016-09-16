var express = require('express');
module.exports = function(){
	var app = express();
	var home = require('./app/routes/home')
	app.set('port', 3000)
	app.use(app.router);
	app.use(express.static('./public'));
	app.set('views engine','ejs');
	app.set('views','./app/views');
	home(app);
	return app;
};
