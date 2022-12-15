//Example1

$(document).ready(function(){
    $("#btn").click(function(){
        $("div").css("background","yellow")
    })

    $("#btn1").click(function(){
        $("div").text("Change Div Text");
        $("div").css("background","pink")
        $("div").css("color","red")
    })
})

//Example2

$(document).ready(function(){
    $("#btn2").click(function(){

        $("#demo").hide();
        alert("Paragraph now Hide");
    })

    $("#btn3").click(function(){

        $("#demo").show();
        alert("Show Paragraph");
    })
})

//Example 3
$(document).ready(function(){
    $("#demo1").hide();
    $("#btn4").click(function(){
        $("#demo1").toggle();
    })
})


   


   