/** Set array */
let questionId = 0;

/** Click functions created from 'start', 'next' and 'submit' id's.
 */
/**click function to start the game iterating questions from numberOfQuestion array */
document.addEventListener("DOMContentLoaded", function (event) {
    let starts = document.getElementById("start");
    start.addEventListener("click", function () {
        event.preventDefault();
        console.log("yesilistened");
        questionId++;
        iterate(questionId);

    });
});
document.addEventListener("DOMContentLoaded", function (event) {
    let nexts = document.getElementById("next");
    next.addEventListener("click", function () {
        event.preventDefault();
        console.log("yesilistened");
        if (questionId < 3) {
            questionId++;
            iterate(questionId);
            console.log("iterating")
            reset();
        } else {
            alert(`Well done. See your score in the Tally Zone below. Press OK and then click 'start game' if you want to try the quiz again!
            Thanks for playing!`)
        }
    });
});
document.addEventListener("DOMContentLoaded", function (event) {
    let submits = document.getElementById("submit");
    submit.addEventListener("click", function () {
        event.preventDefault();
        checkAnswer();
        console.log("checkanswer");

    });
});

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

// function colourReset() {

// }

let confirm = "";
/** Add event listeners to the 3 answers when the corret or incorrect button is clicked*/
answer1.addEventListener("click", () => {
    answer1.style.backgroundColor = "white";
    answer2.style.backgroundColor = "rgb(201, 177, 223);";
    answer3.style.backgroundColor = "rgb(201, 177, 223);";
    confirm = answer1.value;
    console.log("answer1 clicked correct")
});
answer2.addEventListener("click", () => {
    answer1.style.backgroundColor = "rgb(201, 177, 223);";
    answer2.style.backgroundColor = "white";
    answer3.style.backgroundColor = "rgb(201, 177, 223);";
    confirm = answer2.value;
    console.log("answer2 clicked correct")
});
answer3.addEventListener("click", () => {
    answer1.style.backgroundColor = "rgb(201, 177, 223);";
    answer2.style.backgroundColor = "rgb(201, 177, 223);";
    answer3.style.backgroundColor = "white";
    confirm = answer3.value;
    console.log("answer3 clicked correct")
});

/** setting function to run quiz with my my Paw Patrol Quiz Array. */
function iterate(questionId) {
    console.log("1");

    /** getting question from array*/
    let questions = document.getElementById("questionbay");
    /**getting inner text of the question in my array */
    questions.textContent = numberOfQuestions[questionId].question;

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

// let check = document.getElementsById("check");
function checkAnswer() {
    /** Getting the window to show the result to the user within a div*/
    let outcome = document.getElementsByClassName("outcome");
    /** Setting outcome as empty */
    outcome[0].textContent = "";
    /**Confirm the view of correct or incorrect choices for user with different text and color to the text */

    /**get html element check from html */
    // check[0].addEventListener("click", checkAnswer()); {
    if (confirm == "true") {
        outcome[0].textContent = "True";
        outcome[0].style.color = "blue";

        incrementScore();
        console.log("true n G correct");
    } else {
        outcome[0].textContent = "Ffalse";
        outcome[0].style.color = "purple";

        incrementWrongAnswer();
        console.log("false n R incorrect");
    }
};
// };

/** Gained with help from Slack commmunity with adjustments added. */
function reset() {
    if (img === img); {
        let reset1 = document.getElementById("x1");
        reset1.parentNode.removeChild(reset1);
        let reset2 = document.getElementById("x2");
        reset2.parentNode.removeChild(reset2);
    }
}

/** Function to increment correct score */
function incrementScore() {
    /**Gets the current tally of correct answers and increments it by 1
     * 'let functions' taken and adjusted from Love-Maths Walkthrough project     */
    let oldScoreCorrect = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScoreCorrect;
    /** Image input and 'if' statement for correct answer. Show inside element with Id="x1". 
     * Code credit to moonbooks.org and adjusted accordingly */
    let img = document.createElement("img");
    img.src = "../assets/images/yesPupCP.png";
    let imageBlock1 = document.getElementById("x1");
    if (oldScoreCorrect = +1) {
        imageBlock1.appendChild(img);
        console.log("image1")
    }
    console.log("6");

}

/** Function to increment incorrect score */
function incrementWrongAnswer() {
    /**Gets the current tally of incorrect answers and increments it by 1
     * 'let functions' taken and adjusted from Love-Maths Walkthrough project */
    let oldScoreIncorrect = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScoreIncorrect;
    /** Image input and 'if' statement for incorrect answer. Show inside element with Id="x2". 
     * Code credit to moonbooks.org and adjusted accordingly */
    let img = document.createElement("img");
    img.src = "../assets/images/NoPupCP.png";
    let imageBlock2 = document.getElementById("x2");
    if (oldScoreIncorrect = +1) {
        imageBlock2.appendChild(img);
        console.log("image2")

    }
    console.log("7");
}

/** 1. Reset() pictures/clear() 
 * 2. End Loop
 * 3. Default start to quiz should not show Ffalse.
 * 4.
 */