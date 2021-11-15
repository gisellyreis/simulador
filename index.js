console.log('hi');


var fs=require('fs');
var data=fs.readFileSync('log.json', 'utf8');
var log=JSON.parse(data);
var bodyparser=require('body-parser');
console.log(log);