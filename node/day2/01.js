

for(var i=1;i<10;i++){
    var m = i;
    exer(m,function(m){
        console.log(m)
    })
}
function exer(param,callback){
    
    setTimeout(function(){
        callback(param);
    },200)
}