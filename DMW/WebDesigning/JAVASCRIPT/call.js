function result(num){ //8
    var x = document.getElementById("txt")
    x.value += num // x.value = x.value + num //8+7    
}
function clear_Result(){
    var result = document.getElementById('txt')
    result.value = " "
}

function calculation(){
    var result = document.getElementById("txt")
    result.value = eval(result.value)
}