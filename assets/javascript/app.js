
$(document).ready(function () {
  
  //Objects, Variables, and Arrays
  //=========================================================================================
  var correct = 0;
  var incorrect = 0;
  var timedOut = 0;
  var timerId;
  var game = {
    questions: {
      q1: ["What is the 'A.C.' stand for in A.C. Slater's name?",],
      a1: ["Albert Clifford", "Almond Cashew", "Aaron Charles", "Aybee Cee"]
    }
  }
  var timeLeft = 30;

  //Functions
  //=========================================================================================
  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
    } else {
      $("#timer").html("<h1>Time: " + timeLeft + "</h1>");
      timeLeft--;
    }
  }


  //Clicking the START button displays the timer(running), question, and answer choices
  $("#start-button").on("click", function () {
    $("#start-button").html("<h1>" + game.questions.q1[0] + "</h1><hr>");
    $("#timer").html("<h1>Time: " + timeLeft + "</h1>");

    timerId = setInterval(countdown, 1000);
    
    for (var i = 0; i < game.questions.a1.length; i++) {
      $("#answers").append("<h3>" + game.questions.a1[i] + "</h3>");
    }

  })
})





//Main Process
//=========================================================================================

