function one(){
var result=0;
for(var i=0;i<10000000000000000000000;i++){
    result+=i;
}
document.querySelector("#output").innerHTML=result;
}
function two(){
    document.querySelector("#hi").innerHTML="Hi"
}