var net = require('net')
var timeFmt = require('strftime')
var server = net.createServer(function(socket) {
	socket.end(timeFmt('%F %R'))
})
server.listen(Number(process.argv[2]))