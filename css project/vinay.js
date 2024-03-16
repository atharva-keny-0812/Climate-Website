const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Paris", "Rome", "Berlin"],
        correctAnswer: "Paris"
    }]

const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;

    choicesElement.innerHTML = "";
    question.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => {
            checkAnswer(choice);
        });
        choicesElement.appendChild(button);
    });
}



showQuestion();