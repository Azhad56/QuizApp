// creating array of an object 
// here object means question object
const quizDB = [{
        question: "Q 1 - Inside which HTML element do we put the JavaScript?",
        a: "<js>",
        b: "<javascript>",
        c: "<script>",
        d: "<scripting>",
        ans: "ans3"
    },
    {
        question: "Q 2 - Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "both of the above",
        d: "None",
        ans: "ans3"
    },
    {
        question: "Q 3 - Which built-in method combines the text of two strings and returns a new string?",
        a: "append()",
        b: "concat()",
        c: "attach()",
        d: "add()",
        ans: "ans2"
    },
    {
        question: "Q 4 - Which built-in method returns the characters in a string beginning at the specified location?",
        a: "substr()",
        b: "getsubstring()",
        c: "slice",
        d: "None of the above",
        ans: "ans1"
    }
]

// Getting element of html docs so that we change it on clicking 
// get heading question tag so that it an be changed
const question = document.querySelector('.question');
// get all the options element label
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

// get button elements so that on clicking that button we can go to next question
// and check for correct answer
const submit = document.querySelector("#submit");
// get all radio buttons to check if one of them is clicked 
const answers = document.querySelectorAll('.answer');
// get showscore Area so that we can show result after the quiz end
const showScore = document.querySelector('#showScore');


let Questioncount = 0; // firstly i will add first question
let score = 0; // inially score will be zero
// this arrow function will load question and its possible answer on calling 
const loadQuestion = () => {
    const questionData = quizDB[Questioncount];
    question.innerText = questionData.question;
    option1.innerText = questionData.a;
    option2.innerText = questionData.b;
    option3.innerText = questionData.c;
    option4.innerText = questionData.d;
}

loadQuestion(); // first load first question 

// this funtion will return the id of the answer in which user has clicked
const getcheckedanswer = () => {
    let answer;
    answers.forEach((currentEle) => {
        console.log(currentEle.checked);
        if (currentEle.checked) {
            answer = currentEle.id;
        }
    })
    return answer;
};

const deselectAll = () => {
    answers.forEach((currentele) => currentele.checked = false);
};

// addding event listener to button so that on clicking it we can perform some operation
// first check on which radio the user clicked on and get that id
// if user clicked id matched with question's correct answer id then do score++
submit.addEventListener('click', () => {
    const checkedanswer = getcheckedanswer();
    if (checkedanswer == quizDB[Questioncount].ans) {
        score++;
    }
    Questioncount++;
    deselectAll();
    if (Questioncount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h3> Your marks ${score}/${quizDB.length} ✌  </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
        showScore.classList.remove('scoreArea');
    }
});