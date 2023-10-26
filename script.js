// lets take some initially elements for furthur processing
const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choiceBox = document.querySelector('.choices');
const nextButton = document.querySelector('.nextButton');
const scoreCard = document.querySelector('.scoreCard');

const quiz = [
    {
        question: "Q. Javascript is an _________ language ?",
        choices: ["Object Oriented", "Object Based", "Procedural", "None of Above"],
        answer: "Object Oriented"

    },

    {
        question: "Q. Which of the following keywords is used to define a variable in Javascript ?",
        choices: ["Var", "let", "Const", "All of Above"],
        answer: "All of Above"

    },
    {
        question: "Q. Which of the following is not a CSS box model property?",
        choices: ["margin", "padding", "border-radius", "border-collapse"],
        answer: "border-collapse"
    },
    {
        question: "Q. Which of the following is not a valid way to declare a function in JavaScript?",
        choices: ["function myFunction() {}", " let myFunction = function() {};", "myFunction: function() {}", "const myFunction = () => {};"],
        answer: "myFunction: function() {}"
    },
    {
        question: "Q. Which of the following is not a JavaScript data type?",
        choices: ["string", "boolean", "object", "float"],
        answer: "float"
    },
    {
        question: "Q. What is the purpose of the this keyword in JavaScript?",
        choices: ["It refers to the current function.", "It refers to the current object.", "It refers to the parent object.", " It is used for comments."],
        answer: "It refers to the current object."
    },
    {
        question: "Q. Which of the following methods can be used to display data in some form using ?",
        choices: ["document.write()", "console.log()", "alert()", "All of Above"],
        answer: "All of Above"
    }


];

// some initially variable we need to use in this Quiz application
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;

// this is the function of showing questions and answers
const showQuestion = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.innerHTML = questionDetails.question;


    choiceBox.textContent = "";


    for (let i = 0; i < questionDetails.choices.length; i++) {
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.innerText = currentChoice;
        choiceDiv.classList.add('choice');
        choiceBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            if (choiceDiv.classList.contains('selected')) {
                choiceDiv.classList.remove('selected');
            }

            else {
                choiceDiv.classList.add('selected');
            }
        })

    }


}
// this function is used for check score
const showScore = () => {
    questionBox.innerText = "";
    choiceBox.innerText = "";
    scoreCard.textContent = `you scored ${score} out of ${quiz.length}`;

    nextButton.innerText = `Play Again`;

    // nextButton.addEventListener('click',()=>{
    //     currentQuestionIndex=0;
    //     showQuestion();
    //     nextButton.innerText="Next";
    //     scoreCard.innerText="";
    // })





}

// this function is used for check wheather answer is true or not
const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        alert("your answer is correct");
        score++;
    }
    else {
        alert("wrong answer");
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < quiz.length) {
        showQuestion();

    }
    else {
        showScore();
        quizOver = true;
    }
}






showQuestion();
// this is adding event listener on the next button 
nextButton.addEventListener('click', () => {
    let choiceSelect = document.querySelector('.choice.selected');
    if (!choiceSelect && nextButton.textContent === 'Next') {
        alert('select your answer');
        return;
    }
    if (quizOver) {
        nextButton.innerText = "Next";
        scoreCard.innerText = "";

        currentQuestionIndex = 0;
        showQuestion();
        quizOver = false;
        score = 0;

    }
    else {
        checkAnswer();
        i
    }



})

// let timer=60;
// setInterval(()=>{
//   if(timer>0){
//     timer=timer-1;
//     console.log(timer);
//   }
// },1000)
