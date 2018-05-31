
$(document).ready(function () {

  //Objects, Variables, and Arrays
  //=========================================================================================
  var correct = 0;
  var incorrect = 0;
  var timedOut = 0;
  var timerId;
  var game = {
    trivia: {
      questions: ["What is the 'A.C.' stand for in A.C. Slater's name?",
        "What is the name of the fictional university that Jessie Spano longed to attend?",
        "What is the name of the gang's rock band?",
        "Which school was Bayside's rival?",
        "What is the name of Mr. Belding's 'cooler' brother?",
        "Which band did the gang wait to get concert tickets to?",
        "What was the downside to Zack's miracle zit removal cream?",
        "Who played Screech's girlfriend, Violet?",
        "What was Lisa's mother's occupation?",
        "What was Zack's SAT score?"],
      answers: {
        a0: ["Albert Clifford", "Alfred Charlie", "Ace Corbin", "Alan Chuck"],
        a1: ["Stansbury University", "Springfield University", "University of Los Angeles", "Starfleet Academy"],
        a2: ["Zack Attack", "The Screechers", "'A.C.' and the Sunshine Band", "Lisa and the Turtles"],
        a3: ["Valley Bulldogs", "Westdale Bears", "Polk Panthers", "Ridgemont Wolves"],
        a4: ["Rod Belding", "Kip Belding", "Tony Crane", "Nigel Belding"],
        a5: ["U2", "Michael Jackson", "Billy Idol", "Smashing Pumpkins"],
        a6: ["Turns skin maroon", "grows unwanted hair", "smells like garbage", "causes hiccups"],
        a7: ["Tori Spelling", "Soleil Moon Frye", "Leah Remini", "Shannon Daugherty"],
        a8: ["A surgeon", "A lawyer", "A banker", "An actress"],
        a9: ["1502", "701", "1000", "1130"]
      }
    }
  }
  var timeLeft = 30;
  var tempAnswers = [0, 1, 2, 3];
  var nextQuestion = 0;

  //Functions
  //=========================================================================================

  //Countdown Timer starts and displays
  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
    } else {
      timeLeft--;
      $("#timer").html("<h1>Time: " + timeLeft + "</h1>");
    }
  }
  // function checker () {
  //   if (x === y) {
  //     alert("correct!");
  //   } else if (x !== y) {
  //     alert("incorrect");
  //   } else {
  //     alert("Timed Out!");
  //   }
  // }

  
  

  //Clicking the START button shuffles the questions
  $("#start-button").on("click", function () {
    
    timerId = setInterval(countdown, 1000);

    $("#timer").html("<h1>Time: " + timeLeft + "</h1>");
    $("#start-button").html("<h1>" + game.trivia.questions[nextQuestion] + "</h1><hr>");
  
    for (var i = 0; i < 4; i++) {
      $("#answers").append("<h3>" + game.trivia.answers.a0[i] + "</h3>");
    }
    nextQuestion++;

  })

  $("#answers").on("click", function() {
    var guess = $("#answers").val();
    console.log(guess);
  })


  //Shuffles Array of Questions and Answers
  function shuffle (array) {
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
})





//Main Process
//=========================================================================================

