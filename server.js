var connect = require('connect');
var serveStatic = require('serve-static');
var favicon = require('serve-favicon');

connect().use(favicon(__dirname + '/public/assets/img/favicon.ico'))
	.use(serveStatic(__dirname + '/public'))
	.listen(process.env.PORT || 8080);