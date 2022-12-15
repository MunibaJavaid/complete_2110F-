function result(num){


        var x = document.getElementById('txt');
        x.value += num;

        // x.value += num;
}
function clear_Result(){

        var result = document.getElementById('txt');
        result.value = " ";
}
function calculation(){



        var result  = document.getElementById('txt');  
        result.value = eval(result.value);    
}