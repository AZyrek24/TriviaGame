
$(document).ready(function () {

  //Objects, Variables, and Arrays
  //=========================================================================================
  var correct = 0;
  var incorrect = 0;
  var timedOut = 0;
  var timerId;
  var started = false;
  var game = {
    trivia: {
      questions: ["What does the 'A. C.' in Slater's name stand for?",
        "What is the name of the fictional university that Jessie Spano longed to attend?",
        "What is the name of the gang's rock band?",
        "Which school was Bayside's rival?",
        "What is the name of Mr. Belding's 'cooler' brother?",
        "Which band did the gang wait to get concert tickets to?",
        "What was the downside to Zack's miracle zit removal cream?",
        "Who played Screech's girlfriend, Violet?",
        "What was Lisa's mother's occupation?",
        "What was Zack's SAT score?"],
      answers: [
        ["Albert Clifford", "Alfred Charlie", "Ace Corbin", "Alan Chuck"],
        ["Stansbury University", "Springfield University", "University of Los Angeles", "Starfleet Academy"],
        ["Zack Attack", "The Screechers", "'A.C.' and the Sunshine Band", "Lisa and the Turtles"],
        ["Valley Bulldogs", "Westdale Bears", "Polk Panthers", "Ridgemont Wolves"],
        ["Rod Belding", "Kip Belding", "Tony Crane", "Nigel Belding"],
        ["U2", "Michael Jackson", "Billy Idol", "Smashing Pumpkins"],
        ["Turns skin maroon", "grows unwanted hair", "smells like garbage", "causes hiccups"],
        ["Tori Spelling", "Soleil Moon Frye", "Leah Remini", "Shannon Daugherty"],
        ["A surgeon", "A lawyer", "A banker", "An actress"],
        ["1502", "701", "1000", "1130"]
      ]
    }
  }
  var timeLeft = 30;
  var nextQuestion = 0;
  var guess = "";
  var newAnswer;
  //Functions
  //=========================================================================================

  //Countdown Timer displays and runs
  function countdown() {
    if (timeLeft === 0) {
      timedOut++;
      timeLeft = 30;
      $("#timer").html("<h1>Time: " + timeLeft + "</h1>");
      newQuestion();
    } else {
      timeLeft--;
      $("#timer").html("<h1>Time: " + timeLeft + "</h1>");
    }
  }
  //Checks the guessed answer, runs a new question
  function checker(guessed) {

    if (guessed === game.trivia.answers[nextQuestion][0]) {
      correct++;
      nextQuestion++;
      newQuestion();
    } else if (guessed !== game.trivia.answers[nextQuestion[0]]) {
      incorrect++;
      nextQuestion++;
      newQuestion();
    }
  }
  

  //Displays new question and checks answer clicked
  function newQuestion() {
    if (nextQuestion > 9) {
      gameScore();
    }
    $("#timer").html("<h1>Time: " + timeLeft + "</h1>");
    $("#start-button").html("<h1>" + game.trivia.questions[nextQuestion] + "</h1><hr>");
    $("#choices").html("");

    for (var i = 0; i < 4; i++) {
      newAnswer = $("<h3>" + game.trivia.answers[nextQuestion][i] + "</h3>")
      $("#choices").append(newAnswer);
      $(newAnswer).attr("value", game.trivia.answers[nextQuestion][i]);
    }

    $("h3").on("click", function () {
      guess = $(this).attr("value");
      checker(guess);
    })

    timeLeft = 30;
  }
  //Displays Game Score at end of questions
  function gameScore() {
    $(".game-panel").empty();
    $(".game-panel").html("<h1>#Correct: " + correct + "</h1><hr><h1>#Incorrect: " + incorrect + "</h1><hr><h1>#Timed Out: " + timedOut +"</h1>")
  }

  //Shuffles Array of Questions and Answers
  function shuffle(array) {
    var i = 0
      , j = 0
      , temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array[j];
  }

  //Main Process
  //Clicking the START button displays the first question and answer choices
  $("#start-button").on("click", function () {
    if (started === false) {
      timerId = setInterval(countdown, 1000);

      $("#timer").html("<h1>Time: " + timeLeft + "</h1>");
      $("#start-button").html("<h1>" + game.trivia.questions[nextQuestion] + "</h1><hr>");

     
      for (var i = 0; i < 4; i++) {
        newAnswer = $("<h3>" + game.trivia.answers[nextQuestion][i] + "</h3>")
        $("#choices").append(newAnswer);
        $(newAnswer).attr("value", game.trivia.answers[nextQuestion][i]);
      }
    }
    started = true;
    $("h3").on("click", function () {
      guess = $(this).attr("value");    
      checker(guess);
    })
  })
  
})







