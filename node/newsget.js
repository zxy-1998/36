var http = require("http");
var url = require("url");
var queryString = require("querystring")

http.createServer(function(req,res){
    var str = url.parse(req.url).query;
    var obj = queryString.parse(str);
    console.log(obj);
}).listen(3000);
console.log("server start")