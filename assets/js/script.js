document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementsByClassName("buttons");

    for (let button of buttons) {
        playGame.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "easy") {
                console.log("working");
                findOutAnswer();
            } else if (this.getAttribute("data-type") === "medium") {
                ;
                console.log("working also");
                gameLevel(quizGame);
            }
        });
        gameLevel(quizGame);
    }
    // so enter can be pressed to submit answer instead of moving mouse and clicking.
    // document.getElementById("my-answer").addEventListener("keydown", function (event) {
    //     if (event.key === "Enter") {
    //         findOutAnswer();
    //     }
    // });
});

// let userName = document.getElementById('username');
// userName = [];
// userName.push(`${userName}`);

let numberOfQuestions = [
    {
        question: "What is naughty Majors name in Paw Patrol who cases problems for the Paw Patrol gang?",
        answers: {
            a: "Major Goodway",
            b: "Major Humdinger",
            c: "Major Johnson"
        },
        correctAnswer: "b"
    },
    {
        question: "What name is given to the puppy who wears a blue police unifrom in Paw Patrol?",
        answers: {
            a: "Chase",
            b: "Rumble",
            c: "Tracker"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the name of Major Goodways pet chicken?",
        answers: {
            a: "Wally",
            b: "Chickaletta",
            c: "Ryder"
        },
        correctAnswer: "b"
    },
    {
        question: "What name is given to the puppy who wears a blue police unifrom?",
        answers: {
            a: "Chase",
            b: "Rumble",
            c: "Tracker"
        },
        correctAnswer: "a"
    },
    {
        question: "What is?",
        answers: {
            a: "Major Goodway",
            b: "Major Humdinger",
            c: "Major Johnson"
        },
        correctAnswer: "b"
    },
    {
        question: "What name is given to the puppy who wears a pink helicopter pilot uniform?",
        answers: {
            a: "Rocky",
            b: "Everest",
            c: "Sky"
        },
        correctAnswer: "a"
    },
];

// let quizQuestion = document.getElementById('question').innerText;
// let quizSolution = document.getElementById('answer1', 'answer2', 'answer3').innerText;
// let quizSubmit = getElementById('submit').innerText;

// gameLevel(quizQuestion, quizSolution, quizSubmit);

// let easyG = Math.random(numberOfQuestions) * 1;
// let mediumG = Math.random(numberOfQuestions) * 2;
// let hardG = Math.random(numberOfQuestions) * 3;

// function quizGame(gameLevel) {

//     if (gameLevel === "easy") {
//         easyG();
//     } else if (gameLevel === "medium") {
//         mediumG();
//     } else if (gameLevel === "hard") {
//         hardG();
//     }
// };

// function findOutAnswer() {
//     for (numberOfQuestions = 0; numberOfQuestions.length < 1; ) {
//         easyG();
//         console.log("game");
//     };
// };

// function correctAnswerScore() {

// }

// function incorrectAnswerScore() {

// }
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

