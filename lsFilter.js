module.exports = function(dirPath, extName, callback) {
	var fs = require('fs');
	var path = require('path');
	var retList = [];
	fs.readdir(dirPath, function(err, data) {
		if(err != null) return callback(err);
		data.forEach(function(fileName) {
			if(path.extname(fileName) === '.' + extName){
				retList.push(fileName);
			}
		});
		return callback(null, retList);
	});	
}