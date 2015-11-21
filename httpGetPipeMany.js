var http = require('http');
var bl = require('bl');
var dataArr = [];
for(var idx = 0; idx < 3; idx++) {
	processURL(process.argv[2+idx], idx);	
}

function processURL(url, idx) {
	http.get(url, function(response){
		response.pipe(bl(function(err, data){
			var dataStr = data.toString();
			dataArr[idx] = dataStr;
			if(checkDone()) {
				printArr();
			}
		}));
	});
}

function checkDone() {
	for(var idx = 0; idx < 3; idx++) {
		if(dataArr[idx] == null) {
			return false;
		}
	}
	return true;
}

function printArr() {
	for(var idx = 0; idx < 3; idx++) {
		console.log(dataArr[idx]);
	}
}