



var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




$(document).ready(function () {
  $('#myselection').on('change', function () {
    var demovalue = $(this).val();
    $("div.myDiv").hide();
    $("#show" + demovalue).show();
  });
});



$(document).ready(function () {
  $('#myselection1').on('change', function () {
    var demovalue1 = $(this).val();
    $("div.myDiv1").hide();
    $("#showw" + demovalue1).show();
  });
});



$(document).ready(function () {
  $("#my_selection").on('change', function () {
    var demo = $(this).val();
    $("div.my_Div").hide();
    $("#shown" + demo).show();
  })
})




//jquery coding //
$(document).ready(function () {
  $('#search-btn').click(function () {


    var checker = 0;
    for (var i = 0; i < 12; i++) {


      var card = $("div").filter(".col-md-6")[i];
      var title = $("h4").filter(".card-title")[i].innerText.toUpperCase();


      if (title.indexOf($("#inp").val().toUpperCase()) > -1) {
        card.style.display = 'flex';
        checker++;
      }
      else {
        card.style.display = 'none';
      }
    }






  });
});


// $(document).ready(function () {



  // CARD MODAL //
  $(document).ready(function () {
    $(".card-link").click(function () {
        $(".rounded").attr("src", $(this).parent().siblings().attr("Src"));
        $(".product_name").text($(this).siblings("h2").text());
        $(".product_desc").text($(this).siblings("div").find("p:nth(0)").text());
        // $(".product_price").text($(this).siblings("div").find("p:nth(1)").text());
    });
  });
  

  $(document).ready(function () {
    // $('#loginModal').modal('show');
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  });

