$(document).ready(function() {
  $("div .radio").click(function(){
    $(".liberal").hide();
    $(".moderate").hide();
    $(".conservative").hide();
  })
  $("#questionaire form").submit(function(event) {
    //console.log("submit success");
    var scoreOne = parseInt($("input:radio[name=Q1]:checked").val());
    var scoreTwo = parseInt($("input:radio[name=Q2]:checked").val());
    var scoreThree = parseInt($("input:radio[name=Q3]:checked").val());

    var scoreTotal = scoreOne + scoreTwo + scoreThree;

    if (scoreTotal <= 10) {
      $(".liberal").show();
    } else if (scoreTotal >= 11 && scoreTotal <= 20) {
      $(".moderate").show();
    } else if (scoreTotal >= 21) {
      $(".conservative").show();
    }

  event.preventDefault();
  });
});
