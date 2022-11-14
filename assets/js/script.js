//global variables
let startQuizbtn = document.querySelector("#startQuiz");
let qDiv = document.querySelector("#questions");
let timerElement = document.querySelector("#countdown");
let resultsDiv = document.querySelector("#results");
let nameBox = document.querySelector("#enterName");
let playAgainbtn = document.querySelector("#playAgain");
let questions = [
  { title: "Arrays are enclosed with what?", choices: ["parentheses", "brackets", "curly braces", "quotes"], answer: "brackets" },
  { title: "Variables declared outside of a function are called?", choices: ["universal", "local", "external", "global"], answer: "global" },
  { title: "What would you create to run a piece of code multiple times?", choices: ["loop", "repeat", "function", "class"], answer: "loop" },
  { title: "How do you add text to a new element in JavaScript?", choices: ["aggregate", "append", "affix", "adjust"], answer: "append" },
  { title: "What is the extension for JavaScript files?", choices: ["j5", "js", "j$", "jz"], answer: "js" },
];
let questionsIndex = 0;
let timer;
let timerCount;

//functions

function startQuiz() {
  resultsDiv.innerHTML = "";
  playAgainbtn.innerHTML = "";
  playAgainbtn.disabled = true;
  timerCount = 30;
  createButtons(questionsIndex);
  //bring up question
  document.getElementById("starter").style.display = "none";
  //start timer
  startTimer();
}

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;

    if (timerCount === 0) {
      // Tests if time has run out
      // Clears interval
      clearInterval(timer);
      //function to end quiz
      gameOver();
    }
  }, 1000);
}

function createButtons(index) {
  qDiv.innerHTML = "";
  //this will cycle questions through buttons
  let title = document.createElement("h2");
  title.textContent = questions[index].title;
  qDiv.appendChild(title);

  let buttonOne = document.createElement("button");
  buttonOne.textContent = questions[index].choices[0];
  buttonOne.dataset.answer = questions[index].answer;
  qDiv.appendChild(buttonOne);

  let buttonTwo = document.createElement("button");
  buttonTwo.textContent = questions[index].choices[1];
  buttonTwo.dataset.answer = questions[index].answer;
  qDiv.appendChild(buttonTwo);

  let buttonThree = document.createElement("button");
  buttonThree.textContent = questions[index].choices[2];
  buttonThree.dataset.answer = questions[index].answer;
  qDiv.appendChild(buttonThree);

  let buttonFour = document.createElement("button");
  buttonFour.textContent = questions[index].choices[3];
  buttonFour.dataset.answer = questions[index].answer;
  qDiv.appendChild(buttonFour);
}

function gameOver() {
  qDiv.innerHTML = "";
  resultsDiv.textContent = "GAME OVER";
  clearInterval(timer);
  questionsIndex = 0;

  let again = document.createElement("button");
  again.textContent = "PLAY AGAIN?";
  playAgainbtn.appendChild(again);

  let enterBox = document.createElement("input");
  enterBox.attributes
  nameBox.appendChild(enterBox);

  let element = document.getElementById("#questions");
  element.remove();
}

//function calls

startQuizbtn.addEventListener("click", startQuiz);

qDiv.addEventListener("click", function (event) {
  console.log(event);
  let choice = event.target.innerHTML;
  let answer = event.target.dataset.answer;

  if (choice === answer) {
    resultsDiv.textContent = "✅ correct! ✅";
  } else {
    resultsDiv.textContent = "❌ wrong! ❌";
    if (timerCount <= 5) {
      gameOver();
    } else {
      timerCount = timerCount - 5;
    }
  }

  if (questionsIndex < questions.length - 1) {
    questionsIndex++;
    createButtons(questionsIndex);
  } else {
    qDiv.innerHTML = "";
    gameOver();
  }
});

playAgainbtn.addEventListener("click", startQuiz);
