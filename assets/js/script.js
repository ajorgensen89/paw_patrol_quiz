/** Set array */
let questionId = 0;
// let next = document.getElementsByClassName("next")[0];
// next.addEventListener("click", () => {
//     questionId++;
//     iterate(questionId);
// });
/**Load DOM content. Create a event listener on buttons via click.
 * Get Attributes from HTML with name of data-type to apply to click functions too.
 */
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
            } else(this.getAttribute("data-type") === "submit"); {
                event.preventDefault();
                checkAnswer();
                console.log("checkanswer");
            };
        });
    }
});

/**setting Paw Patrol Quiz array */
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

/** setting function to run quiz with my my Paw Patrol Quiz Array. */
function iterate(questionId) {
    console.log("1");
    /** getting question from array*/
    let questions = document.getElementById("questionbay");
    /**getting inner text of the question in my array */
    questions.textContent = numberOfQuestions[questionId].question;
    /**loop questions and stop after 3 questions */
    for (let questionId = 0; questionId < numberOfQuestions.length; questionId++) {
        if (questionId <= 3) {
            console.log("prt")
        } else {
            console.log("sd")
        };
    };
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

let confirm = "";
/** Add event listeners to the 3 answers when the corret or incorrect button is clicked*/
answer1.addEventListener("click", () => {
    answer1.style.backgroundColor = "green";
    answer2.style.backgroundColor = "red";
    answer3.style.backgroundColor = "red";
    confirm = answer1.value;
    console.log("answer1 clicked correct")
});
answer2.addEventListener("click", () => {
    answer1.style.backgroundColor = "red";
    answer2.style.backgroundColor = "green";
    answer3.style.backgroundColor = "red";
    confirm = answer2.value;
    console.log("answer2 clicked correct")
});
answer3.addEventListener("click", () => {
    answer1.style.backgroundColor = "red";
    answer2.style.backgroundColor = "red";
    answer3.style.backgroundColor = "green";
    confirm = answer3.value;
    console.log("answer3 clicked correct")
});
// let check = document.getElementsById("check");
function checkAnswer() {
    /** Getting the window to show the result to the user within a div*/
    let outcome = document.getElementsByClassName("outcome");
    /** Setting outcome as empty */
    outcome[0].textContent = "";
    /**Comfirm the view of correct or incorrect choices for user with different text and color to the text */

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
/** Function to increment correct score */
function incrementScore() {
    /**Gets the current tally of correct answers and increments it by 1
     * let functions taken and adjusted from Love-Maths Walkthrough project
     */
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
    /** Image input and 'if' statement for correct answer. Show inside element with Id="x1" */
    let img = document.createElement("img");
    img.src = "../assets/images/yesPupCP.png";
    let imageBlock = document.getElementById("x1");
    if (oldScore = +1) {
        imageBlock.appendChild(img);
        console.log("image1")
    }
    console.log("6");
    reset()
}
/** Function to increment incorrect score */
function incrementWrongAnswer() {
    /**Gets the current tally of incorrect answers and increments it by 1
     * let functions taken and adjusted from Love-Maths Walkthrough project
     */
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    /** Image input and 'if' statement for incorrect answer. Show inside element with Id="x2" */
    let img = document.createElement("img");
    img.src = "../assets/images/NoPupCP.png";
    let imageBlock = document.getElementById("x2");
    if (oldScore = +1) {
        imageBlock.appendChild(img);
        console.log("image2")
    }
    console.log("7");
    reset()
}
/** 1. Reset() pictures/clear() 
 * 2. End Loop
 * 3. Default start to quiz should not show Ffalse.
 * 4.
 */