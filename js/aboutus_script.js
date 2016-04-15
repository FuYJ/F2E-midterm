$(document).ready(function(){

  $(".page_second_btn").click(function(){

    $(".page_second_btn").removeClass("btn-active-click");
    $(this).addClass("btn-active-click");

    $(".page_first_text").removeClass("display_block");

    var index = $(this).index();

    if(index == 0){
      $(".number_0").addClass("display_block");
      $(".number_0").fadeIn(500);
    }
    else if(index == 1){
      $(".number_1").addClass("display_block");
      $(".number_1").fadeIn(500);
    }
    else if(index == 2){
      $(".number_2").addClass("display_block");
      $(".number_2").fadeIn(500);
    }
    else if(index == 3){
      $(".number_3").addClass("display_block");
      $(".number_3").fadeIn(500);
    }
  });
});
