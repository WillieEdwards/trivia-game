// initial values
var counter = 20;
var currentQuestion = 0;
var right = 0;
var wrong = 0;
var timer;

// if the time is up go to the next question

function nextQuestion() {
    const isQuestionOver = (quizQuestions.length - 1) === currentQuestion;
    if (isQuestionOver) {
        displayResult();
    } else {
        currentQuestion++;
        loadQuestion();
    }
}

// start a 20 second timer for user to chose an answer for each question

function timeUp() {
    clearInterval(timer);

    wrong++;

    setTimeout(nextQuestion, 3 * 1000);
}

function countDown() {
    counter--;

    $('#time').html('Timer: ' + counter);

    if (counter === 0) {
        timeUp();
    }
}

// display question and choices in the browser

function loadQuestion() {
    counter = 20;
    timer = setInterval(countDown, 1000);

    const question = quizQuestions[currentQuestion].question; 
    const choices = quizQuestions[currentQuestion].choices;  

    $('#time').html('Timer: ' + counter);
    $('#game').html(`
    <h4>${question}</h4>
    ${loadChoices(choices)}
    ${loadRemainingQuestion()}
`);
}

function loadChoices(choices) {
    var result = "";

    for (var i = 0; i < choices.length; i++) {
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
    }

    return result;
}

// go to next question after user makes a choice

$(document).on('click', '.choice', function () {
    clearInterval(timer);
    const selectedAnswer = $(this).attr('data-answer');
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if (correctAnswer === selectedAnswer) {
        right++;
        nextQuestion();
    } else {
        wrong++;
        nextQuestion();
    }
});

function loadRemainingQuestion() {
    const remainingQuestion = quizQuestions.length - (currentQuestion + 1);
    const totalQuestion = quizQuestions.length;

    return `Remaining Question: ${remainingQuestion}/${totalQuestion}`;
}

loadQuestion();