var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var lineArray = buf.toString().split('\n');
console.log(lineArray.length - 1);