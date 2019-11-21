var http=require('http');
var fs=require('fs');
var url = require('url');
var path = require("path");

http.createServer(function(req,res){
    var newpath=url.parse(req.url).pathname;
    switch(newpath){
        case "/":
            getIndex(res);
        case "/img":
            getImg(res);
        default:
            getFault(res);
            break;    
    }
}).listen(3000);
console.log("server start");
function getIndex(res){
    var indexPath= __dirname+"/static/"+url.parse(index.html);
    var indexdata=fs.readFileSync(indexPath,"utf-8");
    res.writeHead(200,{"Content-type":"text/plain"});
    res.end(indexdata);
}

function getImg(res){
    var indexPath = __dirname+"/static/"+url.parse("123.jpg").pathname;
    fs.createReadStream(indexPath).pipe(process.stdout);
}

function getFault(res){
    res.writeHead(404,{"content-type":"text/plain"});
    res.end("no page founded");
}