onmessage = function(e){
    var result = 0;

    for(var i = 0;i<100000000000000000000;i++){
        result += i;
    }
    
    postMessage(result);
}