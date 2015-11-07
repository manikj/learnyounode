var fs = require('fs');
var ext = '.' + process.argv[3];
fs.readdir(process.argv[2], function(err, list) {
	for(var i = 0; i < list.length; i++) {
		var fileName = list[i];
		if(fileName.endsWith(ext)) {
			console.log(fileName);
		}
	}
});