var quizOpen = document.querySelector (".quizOpen");
var start = document.getElementById ("start");
var questionEl = document.querySelector(".questionEl");
var index = 0
var answers = document.querySelector(".answers");
var time = 60
var timerId;
var timerEl = document.querySelector(".timerEl");
var questions = [
    {
        question: "question1", 
        answers: ["answer1", "answer2", "answer3", "answer4" ],
        correct: "answer2",
    },
    {
        question: "question2", 
        answers: ["answer1", "answer2", "answer3", "answer4" ],
        correct: "answer2",
    },
    {
        question: "question3", 
        answers: ["answer1", "answer2", "answer3", "answer4" ],
        correct: "answer2",
    },
    {
        question: "question4", 
        answers: ["answer1", "answer2", "answer3", "answer4" ],
        correct: "answer2",
    },
]

function endQuiz() {
    clearInterval(timerId)
    questionEl.setAttribute("class", "disappear");
    answers.setAttribute("class", "disappear");
}

function startQuiz() {
    quizOpen.setAttribute("class", "disappear")
    timerId=setInterval(timer, 1000)
    timerEl.textContent=time;
    getQuestion()
}

function timer() {
    time--
    timerEl.textContent=time;
}

function getQuestion() {
    var currentQuestion = questions[index]
    questionEl.textContent=currentQuestion.question
    answers.innerHTML=""
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        var button = document.createElement("button")
        button.textContent=currentQuestion.answers[i]
        button.setAttribute("value", currentQuestion.answers[i])
        button.onclick=getAnswer;
        answers.append(button)
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

start.addEventListener("click", startQuiz);