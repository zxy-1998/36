var dns = require("dns");
var http=require("http");
urls=['http://www.baidu.com','http://www.qq.com'];

dns.resolve4("www.qq.com",function(err,addresses){
    if(err){
        console.log(err);
    }else{
        console.log(addresses);
    }
})