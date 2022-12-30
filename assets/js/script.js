let questionId = 0;
let isCorrect = "";
// let next = document.getElementsByClassName("next")[0];
// next.addEventListener("click", () => {
//     questionId++;
//     iterate(questionId);
// });

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function (event) {
            if (this.getAttribute("data-type") === "start") {
                event.preventDefault();
                console.log("yesilistened");
                iterate(questionId);
            } else if (this.getAttribute("data-type") === "next") {
                event.preventDefault();
                questionId++;
                iterate(questionId);
                console.log("oknext");
            } else if (this.getAttribute("data-type") === "submit"); {
                event.preventDefault();
                checkAnswer();

                console.log("checkanswer");
            };
        });
    }
});
/**setting question array */

let numberOfQuestions = [{
        questionId: 0,
        question: "What is naughty Majors name in Paw Patrol who causes problems for the Paw Patrol gang?",
        answers: [{
                choice: "Major Goodway",
                isCorrect: false
            },
            {
                choice: "Major Humdinger",
                isCorrect: true
            },
            {
                choice: "Major Johnson",
                isCorrect: false
            },
        ]

    },
    {
        questionId: 1,
        question: "What name is given to the puppy who wears a blue police unifrom in Paw Patrol?",
        answers: [{
                choice: "Chase",
                isCorrect: true
            },
            {
                choice: "Rumble",
                isCorrect: false
            },
            {
                choice: "Tracker",
                isCorrect: false
            },
        ],

    },
    {
        questionId: 2,
        question: "What is the name of Major Goodways pet chicken?",
        answers: [{
                choice: "Wally",
                isCorrect: false
            },
            {
                choice: "Chickaletta",
                isCorrect: true
            },
            {
                choice: "Ryder",
                isCorrect: false
            },
        ]

    },
    {
        questionId: 3,
        question: "What name is given to the puppy who wears a blue police unifrom?",
        answers: [{
                choice: "Chase",
                isCorrect: true
            },
            {
                choice: "Rumble",
                isCorrect: false
            },
            {
                choice: "Tracker",
                isCorrect: false
            },

        ]

    },
    {
        questionId: 4,
        question: "What is the name of the Major with Grandchildren called Callie and Ben?",
        answers: [{
                choice: "Major Johnson",
                isCorrect: false
            },
            {
                choice: "Major Humdinger",
                isCorrect: false
            },
            {
                choice: "Major Goodway",
                isCorrect: true
            },
        ]

    },
    {
        questionId: 5,
        question: "What name is given to the puppy who wears a pink helicopter pilot uniform?",
        answers: [{
                choice: "Rocky",
                isCorrect: false
            },
            {
                choice: "Everest",
                isCorrect: false
            },
            {
                choice: "Skye",
                isCorrect: true
            },
        ]
    },
];

/** setting function to run quiz via iterating the ID for my questions. */
function iterate(questionId) {
    /** getting the window to show the result by class in div*/
    console.log("1");
    let outcome = document.getElementsByClassName("outcome");
    outcome[0].textContent = "";
    /** getting question from array*/
    let questions = document.getElementById("questionbay");
    /**getting inner text of the question in my array */
    questions.textContent = numberOfQuestions[questionId].question;

    // for (let question = 0; question < question.length; question++){
    //     console.log(questions[questionId]);
    //     console.log("questionlogged")
    // }
    /**Getting my 3 different answer choice boxs from html */
    let answer1 = document.getElementById("answer1");
    let answer2 = document.getElementById("answer2");
    let answer3 = document.getElementById("answer3");
    console.log("2");
    /** getting innertext of my answer choices from my answer arrays */
    answer1.textContent = numberOfQuestions[questionId].answers[0].choice;
    answer2.textContent = numberOfQuestions[questionId].answers[1].choice;
    answer3.textContent = numberOfQuestions[questionId].answers[2].choice;
    /** idenifying the correct option from the answer in the array */
    answer1.value = numberOfQuestions[questionId].answers[0].isCorrect;
    answer2.value = numberOfQuestions[questionId].answers[1].isCorrect;
    answer3.value = numberOfQuestions[questionId].answers[2].isCorrect;
    console.log("3");
}
/**get html element check from html */

function checkAnswer() {

    /** Add event listeners to the 3 answers */
    var confirmed = "";
    answer1.addEventListener("click", () => {
        answer1.style.backgroundColor = "green";
            answer2.style.backgroundColor = "red";
            answer3.style.backgroundColor = "red";
            confirmed = answer1.value;
    });
    answer2.addEventListener("click", () => {
        answer1.style.backgroundColor = "red";
        answer2.style.backgroundColor = "green";
        answer3.style.backgroundColor = "red";
        confirmed = answer2.value;
    });
    answer3.addEventListener("click", () => {
        answer1.style.backgroundColor = "red";
        answer2.style.backgroundColor = "red";
        answer3.style.backgroundColor = "green";
        confirmed = answer3.value;
        console.log("4");
    });
    
    let checks = document.getElementsByClassName("check");
    /**comfirm the view of correct or incorrect choices for user */
    // for (let check of checks) {
    check[0].addEventListener("click", function () {
        if (confirmed = "true") {
            outcome[0].textContent = "True";
            outcome[0].style.color = "green";
            incrementScore();
            console.log("true n G correct");
        } else (confirmed = "false"); {
            outcome[0].textContent = "False";
            outcome[0].style.color = "red";
            incrementWrongAnswer();
            console.log("false n R incorrect");

        }
    });
};
// };
/**
 * Gets the current tally of correct answers and increments it by 1
 * let functions taken and adjusted from Love-Maths Walkthrough project
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++correct;
    console.log("6");
}
/**
 * Gets the current tally of incorrect answers and increments it by 1
 * let functions taken and adjusted from Love-Maths Walkthrough project
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++incorrect;
    console.log("7");
}