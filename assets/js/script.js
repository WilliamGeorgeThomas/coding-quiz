//global variables
let startQuizbtn = document.querySelector("#startQuiz");
let qDiv = document.querySelector("#questions");
let timerElement = document.querySelector("#countdown");
let questions = [
  { title: "this is the first question?", choices: ["hi", "how", "are", "you"], answer: "hi" },
  { title: "this is the second question?", choices: ["w", "x", "y", "z"], answer: "z" },
  { title: "this is the third question?", choices: ["a", "b", "c", "d"], answer: "b" },
  { title: "this is the third question?", choices: ["a", "b", "c", "d"], answer: "b" },
  { title: "this is the third question?", choices: ["a", "b", "c", "d"], answer: "b" },
];
let questionsIndex = 0;
let timer;
let timerCount = 31;

//functions
function startQuiz() {
  createButtons(questionsIndex);
  //bring up question
  document.getElementById("starter").style.display = "none";
  //make clickable
  //start timer
  startTimer();
}

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;

    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      //function to end quiz
    }
  }, 1000);
}

function createButtons(index) {
  qDiv.innerHTML = "";
  //this will cycle questions through buttons
  let title = document.createElement("h2");
  title.textContent = questions[index].title;
  qDiv.appendChild(title);

  //add 4 answer options
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

//function calls

startQuizbtn.addEventListener("click", startQuiz);

qDiv.addEventListener("click", function (event) {
  console.log(event);
  let choice = event.target.innerHTML;
  let answer = event.target.dataset.answer;

  if (choice === answer) {
    alert("correct");
  } else {
    alert("sorry, wrong answer");
  }

  if (questionsIndex < questions.length - 1) {
    questionsIndex++;
    createButtons(questionsIndex);
  } else {
    qDiv.innerHTML = "";
    alert("game over");
  }
});
