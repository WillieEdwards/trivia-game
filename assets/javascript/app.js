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

    preloadImages('wrong');
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
    var result = '';

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
        preloadImages('right');
        setTimeout(nextQuestion, 3 * 1000);
    } else {
        wrong++;
        preloadImages('wrong');
        setTimeout(nextQuestion, 3 * 1000);
    }
});

function loadRemainingQuestion() {
    const remainingQuestion = quizQuestions.length - (currentQuestion + 1);
    const totalQuestion = quizQuestions.length;

    return `Remaining Question: ${remainingQuestion}/${totalQuestion}`;
}

// show results for questions

function displayResult() {
    const result = `
        <p>You answered ${right} question(s) correct</p>
        <p>You answered ${wrong} question(s) wrong</p>
        <p>Total questions ${quizQuestions.length} question(s) correct</p>
        <button class="btn btn-primary" id="reset">Reset Game</button>
    `;

    $('#game').html(result);
}

$(document).on('click','#reset', function() {
    counter = 20;
    currentQuestion = 0;
    right = 0;
    wrong = 0;
    timer = null;

    loadQuestion();
})

function loadRemainingQuestion() {
    const remainingQuestion = quizQuestions.length - (currentQuestion + 1);
    const totalQuestion = quizQuestions.length;

    return `Remaining Question: ${remainingQuestion}/${totalQuestion}`;
}

function randomImage(images) {
    const random = Math.floor(Math.random() * images.length);
    const randomImage = images[random];
    return randomImage;
}

// display images for answers

function preloadImages(status) {
    const correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if (status === 'right') {
        $('#game').html(`
            <p class="preload-image">Правильно</p>
            <p class="preload-image">The correct answer is ${correctAnswer}</p>
            <img src="${randomImage(rightImages)}" />
        `);
    } else {
        $('#game').html(`
            <p class="preload-image">The correct answer is ${correctAnswer}</p>
            <p class="preload-image">You need to prove your loyalty</p>
            <img src="${randomImage(wrongImages)}" />
        `);
    }
}

$('#start').click(function() {
    $('#start').remove();
    $('#time').html(counter);
    loadQuestion();
});