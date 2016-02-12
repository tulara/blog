var connect = require('connect'),
	favicon = require('serve-favicon'),
	sassMiddleware = require('node-sass-middleware'),
	serveStatic = require('serve-static'),
	http = require('http');

var srcPath = __dirname + '/sass';
var destPath = __dirname + '/public/assets/css';

var port = process.env.PORT || 8080;

var app = connect()
	.use('/assets/css', sassMiddleware({
		src: srcPath,
		dest: destPath,
		debug: true,
		outputStyle: 'expanded'
	}))
	.use(favicon(__dirname + '/public/assets/img/favicon.ico'))
	.use('/',
  		serveStatic('./public', {})
	);

http.createServer(app).listen(port);
console.log('Server listening on port ' + port);