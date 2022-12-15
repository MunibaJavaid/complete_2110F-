function one(){ 
    var wokerObj = new Worker("WebWorker.js")
    wokerObj.postMessage("Start worker");
    wokerObj.onmessage = function(e){
        document.querySelector("#output").innerHTML = e.data;
    }
    
}


function two(){
    document.querySelector("#hi").innerHTML = "hi";
}