var filter = require('./lsFilter');
filter(process.argv[2], process.argv[3], function(err, list) {
	if(err != null){
		console.error('Error occurred: ' + err);
		return;
	}
	list.forEach(function(str) {		
		console.log(str);
	})
})