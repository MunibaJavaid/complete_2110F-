
  function one(){
    var workerObj= new Worker("webworker.js");
        workerObj.postMessage("Start worker");
        workerObj.onmessage=function(e){
            document.querySelector("#output").innerHTML=e.data;
        }
  }  
    



    function two(){
        document.querySelector("#hi").innerHTML="Hi"
    }