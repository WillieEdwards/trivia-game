// initial values
var counter = 20;
var currentQuestion =0;
var right = 0;
var wrong = 0;
var timer;

// display the question and the choices in the browser

function loadQuestion() {

    const question = quizQuestions[currentQuestion].question; // 
    const choices = quizQuestions[currentQuestion].choices; // 

    $('#time').html('Timer: ' + counter);
    $('#game').html(`
        <h4>${question}</h4>
        ${loadChoices(choices)}
        ${loadRemainingQuestion()}
    `);
}

loadQuestion();