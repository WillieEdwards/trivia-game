// create a list of questions to be called from app.js

var quizQuestions = [
    {
        question: "What animal is often used to symbolize Russia?",
        choices: ["Moose", "Squirrel", "Bear", "Tiger"],
        correctAnswer: "Bear"
    },

    {
        question: "What is a Babushka?",
        choices: ["A dessert pastry", "An old woman", "A Russian stacking doll", "A ski mask"],
        correctAnswer: "An old woman"
    },

    {
        question: "What is a Samovar?",
        choices: ["A curved sword", "An undershirt", "A vessel used to boil water", "A fur cap"],
        correctAnswer: "A vessel used to boil water"
    },

    {
        question: "Which of these countries does NOT border Russia?",
        choices: ["Finland", "Germany", "Georgia", "North Korea"],
        correctAnswer: "Germany"
    },
    
    {
        question: "What is the name of the last tsars youngest daughter?",
        choices: ["Anastasia", "Ekaterina", "Valentina", "Natasha"],
        correctAnswer: "Anastasia"
    },

    {
        question: "Who was Yuri Gagarin?",
        choices: ["The most highly-decorated WWII soldier", "Josef Stalin's illegitimate son", "A spy who stole nuclear secrets from the U.S.", "The first person to orbit the Earth"],
        correctAnswer: "The first person to orbit the Earth"
    },

    {
        question: "What notable Russian was assassinated in Mexico City in 1940?",
        choices: ["Anton Chekhov", "Mikhail Baryshnikov", "Leon Trotsky", "Sergei Rachmaninoff"],
        correctAnswer: "Leon Trotsky"
    },

    {
        question: "Which of these musical works is NOT by Tchaikovsky?",
        choices: ["The Nutcracker", "The Magic Flute", "1812 Overture", "Swan Lake"],
        correctAnswer: "The Magic Flute"
    },

    {
        question: "Which of these bodies of water does Russia NOT touch?",
        choices: ["Baltic Sea", "Black Sea", "Caspian Sea", "East China Sea"],
        correctAnswer: "East China Sea"
    },

    {
        question: "Why did the city of Chelyabinsk briefly become famous in 2013?",
        choices: ["A new record for the coldest temperature on Earth", "The first cloning of a mammal", "A meteor explosion", "A Chechen terrorist bombing"],
        correctAnswer: "A meteor explosion"
    },

    {
        question: "Which of these terms refers to a region of Russia?",
        choices: ["Oblast", "State", "Prefecture", "Duchy"],
        correctAnswer: "Oblast"
    },

    {
        question: "What city was known as Stalingrad between 1925 and 1961?",
        choices: ["St. Petersburg", "Novosibirsk", "Moscow", "Volgograd"],
        correctAnswer: "Volgograd"
    },

    {
        question: "How is Moscow spelled in the Russian language?",
        choices: ["Привет", "Шозкош", "Москва", "Россия"],
        correctAnswer: "Москва"
    },
    
    {
        question: "When was the last time Moscow was ever captured by a foreign power?",
        choices: ["By Ögedei Khan in 1238", "By Napoleon in 1812", "By Hitler in 1942", "Never"],
        correctAnswer: "By Napoleon in 1812"
    },
]

// display gif for answers

var rightImages = [
    "./assets/images/right-bear.gif",
    "./assets/images/right-clap.gif",
    "./assets/images/right-dance.gif"
]

var wrongImages = [
    "./assets/images/wrong-police.gif",
    "./assets/images/wrong-raid.gif",
]