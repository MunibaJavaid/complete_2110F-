// // $(document).ready(function(){
// //     $("h1").css("background","yellow");
// //     $("#demo").css("color","red");
// // })

// //*******FIRST EXAMPLE*********
// $(document).ready(function(){
//     $("#btn").click(function(){
//         $("h1").css("background","yellow");
//         $("#demo").css("color","red")       
//     })
// })

// //*************SECOND EXAMPLE********
// $(document).ready(function(){
//     //BTN ONE
//     $(".btn_one").click(function(){
//         $('p').text("This is a demo text")
//     })

//     //BTN TWO
//     $(".btn_two").click(function(){
//         $('p:first').text("This is another demo")
//     })

//     //BTN THREE

//     $(".btn_three").click(function(){
//         $(".empty").text("This is one more demo text")
//     })
// })

//Example 1
$(document).ready(function(){
    $("#btn").click(function(){
        $("#demo").css("background","yellow")
    })
    $("#btn1").click(function(){
        $("#demo").text("Change Div Text")
        $("#demo").css("color","red");
        $("#demo").css("background","pink")
    })
})
//Example 2
$(document).ready(function(){
    $("#btn2").click(function(){
        $("#p1").hide();
        alert("Paragraph now Hide");
    })

    $("#btn3").click(function(){
        $("#p1").show();
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