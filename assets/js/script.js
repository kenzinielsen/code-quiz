var quizOpen = document.querySelector (".quizOpen");
var start = document.getElementById ("start");
var questionEl = document.querySelector(".questionEl");
var index = 0;
var answers = document.querySelector(".answers");
var time = 60;
var timerId;
var highScore;
var timerEl = document.querySelector(".timerEl");

var scores = [];

var questions = [
    {
        question: "Which one is the OR operator?", 
        answers: ["&&", "||", "===", "==" ],
        correct: "||",
    },
    {
        question: "Which of the following variables is visible everywhere in your javascript code?", 
        answers: ["Global Variable", "Local Variable", "Both ", "None of the above" ],
        correct: "Global Variable",
    },
    {
        question: "Which is the correct way to write a function?", 
        answers: ["function= 1", "function beginQuiz( ) { }", "beginQuiz( ).function", "None of the above" ],
        correct: "function beginQuiz( ) { }",
    },
    {
        question: "What does [ ] do in javascript?", 
        answers: ["Creates an empty object", "Can be used to create a function", "Creates an empty array", "All of the above" ],
        correct: "Creates an empty array",
    },
]

function endQuiz() {
    clearInterval(timerId);
    questionEl.setAttribute("class", "disappear");
    answers.setAttribute("class", "disappear");
}

function startQuiz() {
    quizOpen.setAttribute("class", "disappear");
    timerId=setInterval(timer, 1000);
    timerEl.textContent=time;
    getQuestion();
}

function timer() {
    time--
    timerEl.textContent=time;
    if(time < 1) {
        timerEl.textContent =("Times up!")
        clearInterval(timerId)
    }
    if(time<1) {
        endQuiz();
    }
}

function getQuestion() {
    var currentQuestion = questions[index]
    questionEl.textContent=currentQuestion.question
    answers.innerHTML=""
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        var button = document.createElement("button");
        button.textContent=currentQuestion.answers[i];
        button.setAttribute("value", currentQuestion.answers[i]);
        button.onclick=getAnswer;
        answers.append(button);
    }
}

function getAnswer() {
    if (this.value !== questions[index].correct) {
        time-=5
    }
    index++;
    if (index===questions.length) {
       // call the end quiz function
       endQuiz();
    } else {
        getQuestion();
    }
}

function highScore() {

}

//var saveScores = function() {
//    localStorage.setItem("scores", JSON.stringify (scores));
//}
//function displayHighScore() {
//    localStorage.getItem("score", JSON.parse(score))
//}
//
start.addEventListener("click", startQuiz);