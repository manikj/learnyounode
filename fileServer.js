var fs = require('fs')
var http = require('http')
var file = process.argv[3]
var server = http.createServer(function(req,res) {
	var fileStream = fs.createReadStream(file)
	fileStream.pipe(res)
})

server.listen(process.argv[2])