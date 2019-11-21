var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html"});
    res.end("<h2>haha<h2>");
}).listen(3000);
console.log("server start port 3000");

