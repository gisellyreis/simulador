var fs = require('fs');
var data=fs.readFileSync('../log.json', 'utf8');
var words=JSON.parse(data);
var bodyparser=require('body-parser');
console.log(words);
fs.writeFileSync('../log.json', "", 'utf8');


var express=require('express');

var app=express();

var server=app.listen(3030,listening);

function listening(){
console.log("listening..");
}
app.use(express.static('website'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());