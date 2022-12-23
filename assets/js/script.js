var questionId = 0;

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function (event) {
            if (this.getAttribute("data-type") === "submit") {
                event.preventDefault();
                console.log("yes");
                iterate(questionId);
            }
            else {
                let  = this.getAttribute("data-type");
                iterate(questionId);
                console.log("yesagain")
                    ();
            }
            iterate(questionId);
            console.log("ok");
        });
    }
});
/**setting question array */

let numberOfQuestions = [{
        id: 0,
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
        id: 1,
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
        id: 2,
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
    // {
    //     question: "What name is given to the puppy who wears a blue police unifrom?",
    //     answers: {
    //         a: "Chase",
    //         b: "Rumble",
    //         c: "Tracker"
    //     },

    // },
    // {
    //     question: "What is?",
    //     answers: {
    //         a: "Major Goodway",
    //         b: "Major Humdinger",
    //         c: "Major Johnson"
    //     },

    // },
    // {
    //     question: "What name is given to the puppy who wears a pink helicopter pilot uniform?",
    //     answers: {
    //         a: "Rocky",
    //         b: "Everest",
    //         c: "Sky"
    //     },

    // },
];
/** setting start of quiz to run */
// let start = true;
/** setting function to run quiz via iterating the ID for my questions. */
function iterate(id) {
    /** getting the window to show the result by class in div*/
    console.log("1");
    let outcome = document.getElementsByClassName("outcome");
    outcome[0].textContent = "";
    /** getting question from array*/
    let question = document.getElementById("question");
    /**getting inner text of the question in my array */
                                                         /**NEED HELP WITH THIS LINE 124 AS CAN NOT CREATE LOOP CORRECTLY KEEPS MAKING IT INFINITE.
                                                          * If wont iterate correctly through my questions.
                                                          */
    question.textContent = numberOfQuestions[id].question;
    
    /**Getting my 3 different answer choice boxs from html */
    let answer1 = document.getElementById("answer1");
    let answer2 = document.getElementById("answer2");
    let answer3 = document.getElementById("answer3");
    console.log("2");
    /** getting innertext of my answer choices from my answer arrays */
    answer1.textContent = numberOfQuestions[id].answers[0].choice;
    answer2.textContent = numberOfQuestions[id].answers[1].choice;
    answer3.textContent = numberOfQuestions[id].answers[2].choice;
    /** idenifying the correct option from the answer in the array */
    answer1.value = numberOfQuestions[id].answers[0].isCorrect;
    answer2.value = numberOfQuestions[id].answers[1].isCorrect;
    answer3.value = numberOfQuestions[id].answers[2].isCorrect;
    console.log("3");
    /** Add event listeners to the 3 answers */
    let confirmed = "";
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
    });
    console.log("4");
    /**get html element check from html */
    let check = document.getElementsByClassName("check");

    /**comfirm the view of correct or incorrect choices for user */
    check[0].addEventListener("click", () => {
         if (confirmed === "green") {
            isCorrect = true;
             outcome[0].textContent = "True";
             outcome[0].style.color = "green";
         } else (confirmed === "red"); {
            isCorrect = false;
             outcome[0].textContent = "False";
             outcome[0].style.color = "red";
         }
     })
    console.log("5");
    /**start the quiz */
    /*    if (start) {
            console.log("6");
            iterate("0");
        }*/

    /**next question button */
    let next = document.getElementsByClassName("next")[0];
    console.log("7");
    next.addEventListener("click", () => {
        questionId++;
        iterate(questionId);
    });
}