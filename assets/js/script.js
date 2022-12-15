document.addEventListener("DOMContentLoaded", function () {
    let level = document.getElementsByTagName("button");

    for (let button of level) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                findOutAnswer();
            } else {
                let gamelevel = this.getAttribute("data-type");
                quizGame(gameLevel);
            }
        });
    }
    // so enter can be pressed to submit answer instead of moving mouse and clicking.
    document.getElementById("my-answer").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            findOutAnswer();
        }
    });
});
document.getElementsById("audio"); {
    
}



let userName = [""];

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

function quizGame(gameLevel) {

}

function findOutAnswer() {

}

function correctAnswerScore() {

}

function incorrectAnswerScore() {

}