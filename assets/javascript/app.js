$(document).ready(function() {
  
  //Objects, Variables, and Arrays
  var correct = 0;
  var incorrect = 0;
  var timedOut = 0;
  var game = {
    questions: {
      q1: ["What is the 'A.C.' stand for in A.C. Slater's name?",],
      a1: ["Albert Clifford", "Almond Cashew", "Aaron Charles", "Aybee Cee"]
    }
  }
  console.log(game.questions[0]);
  //Functions
  $("#start-button").on("click", function() {
    $("#start-button").html("<h2>" + game.questions.q1[0] + "</h2><hr>");
    for (var i = 0; i < game.questions.a1.length; i++) {
    $("#answers").append("<h3>" + game.questions.a1[i] + "</h3>");
    
    }
    // guessAnswer();
  })
  
})
