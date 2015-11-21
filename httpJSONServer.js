var url = require('url');
var http = require('http');
var map = require('through2-map');

var server = http.createServer( function(req, res) {
	var urlParse = url.parse(req.url, true);
	var pathname = urlParse.pathname;
	var isoTime = urlParse.query.iso;
	var date = new Date(isoTime);
	res.writeHead(200, { 'Content-Type': 'application/json' });
	var retObject = {};
	if(urlParse.pathname === '/api/parsetime') {
		retObject = {
			hour:date.getHours(),
			minute:date.getMinutes(),
			second:date.getSeconds()
		};
	} else if(urlParse.pathname === '/api/unixtime') {
		retObject = {
			unixtime:date.getTime()
		};
	}
	res.write(JSON.stringify(retObject));
	res.end();
});

server.listen(process.argv[2])