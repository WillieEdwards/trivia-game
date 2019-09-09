// initial values
var counter = 15;
var currentQuestion = 0;
var right = 0;
var wrong = 0;
var timer;

// if the time is up go to the next question

function nextQuestion() {
    var isQuestionOver = (quizQuestions.length - 1) === currentQuestion;
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

    preloadImages("wrong");
    setTimeout(nextQuestion, 4 * 1000);
}

function countDown() {
    counter--;

    $("#time").html("Timer: " + counter);

    if (counter === 0) {
        timeUp();
    }
}

// display question and choices in the browser

function loadQuestion() {
    counter = 15;
    timer = setInterval(countDown, 1000);

    var question = quizQuestions[currentQuestion].question; 
    var choices = quizQuestions[currentQuestion].choices;  

    $("#time").html("Timer: " + counter);
    $(".jumbotron").html(`
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

$(document).on("click", ".choice", function () {
    clearInterval(timer);
    var selectedAnswer = $(this).attr("data-answer");
    var correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if (correctAnswer === selectedAnswer) {
        right++;
        preloadImages("right");
        setTimeout(nextQuestion, 4 * 1000);
    } else {
        wrong++;
        preloadImages("wrong");
        setTimeout(nextQuestion, 4 * 1000);
    }
});

function loadRemainingQuestion() {
    var remainingQuestion = quizQuestions.length - (currentQuestion + 1);
    var totalQuestion = quizQuestions.length;

    return `Remaining Question: ${remainingQuestion}/${totalQuestion}`;
}

// show results for questions

function displayResult() {
    var result = `
        <p>You answered ${right} question(s) correct</p>
        <p>You answered ${wrong} question(s) wrong</p>
        <button class="btn btn-primary" id="reset">Reset Game</button>
    `;

    $(".jumbotron").html(result);
}

$(document).on("click","#reset", function() {
    counter = 15;
    currentQuestion = 0;
    right = 0;
    wrong = 0;
    timer = null;

    loadQuestion();
})

function loadRemainingQuestion() {
    var remainingQuestion = quizQuestions.length - (currentQuestion + 1);
    var totalQuestion = quizQuestions.length;

    return `Remaining Question: ${remainingQuestion}/${totalQuestion}`;
}

function randomImage(images) {
    var random = Math.floor(Math.random() * images.length);
    var randomImage = images[random];
    return randomImage;
}

// display images for answers

function preloadImages(status) {
    var correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if (status === "right") {
        $(".jumbotron").html(`
            <p class="preload-image">Да, ты права!</p>
            <p class="preload-image">The correct answer is <b>${correctAnswer}</b></p>
            <img src="${randomImage(rightImages)}"/>
        `);
    } else {
        $(".jumbotron").html(`
            <p class="preload-image">The correct answer is <b>${correctAnswer}</b></p>
            <p class="preload-image">Нет, ты не прав! Совсем не прав!</p>
            <img src="${randomImage(wrongImages)}"/>
        `);
    }
}

$('#start').click(function() {
    $("#start").remove();
    $("#time").html(counter);
    loadQuestion();
});

var gameStartAudio = new Audio('assets/audio/bochka-bass-kolbaser.mp3')

$('#start').on('click', function () {
    gameStartAudio.play();
    gameStartAudio.setInterval (1*22000);
});