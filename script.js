const questions = [
    {
        question: "What is the National fruit of Pakistan?",
        options: ["Apple", "Mango", "Pinaple", "Orange"],
        answer: "Mango"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Wazir Khan Mosque is at",
        options: ["Lahore", "Sindh", "Punjab", "Islamabad"],
        answer: "Lahore"
    },
    {
        question: "The Total Area of forest in Pakistan",
        options: ["3.5%", "3.6%", "3.7%", "3.8%"],
        answer: "3.6%"
    },
    {
        question: "What is the capital of Pakistan?",
        options: ["Lahor", "Islamabad", "karachi", "Quetta"],
        answer: "Islamabad"
    },
    {
        question: "What was the total area of Pakistan?",
        options: ["881913", "798098", "205344", "347190"],
        answer: "881913"
    },
    {
        question: "Which is diferent from the rest",
        options: ["Hokey", "Cricket", "Chees", "volleyball"],
        answer: "Chees"
    },
    {
        question: "What was the secound Prime Minister of Pakistan?",
        options: ["Liaquat Ali Khan", "Muhammad Ali Bogra", "Chaudart Muhammad Ali", "Khawaja Nizam uddin"],
        answer: "Khawaja Nizam uddin"
    },
    {
        question: "What was the Capital of KPK?",
        options: ["Peshawar", "Quetta", "Karachi", "Lahor"],
        answer: "Peshawar"
    },
    {
        question: "Who was the first Prisident of Pakistan?",
        options: ["Muhammad Ayub Khan", "Wasim Sajjad", "Iskandar Mirza ", "General Pervaiz Mushraf"],
        answer: "Iskandar Mirza"
    },
    {
        question: "All India Muslim Leguage was established in",
        options: ["1902", "1914", "1912", "1906"],
        answer: "1906"
    },
    {
        question: "What was the Largest Desert of Pakistan?",
        options: ["Cholistan", "Thar", "Sindh", "Thal"],
        answer: "Thar"
    },
    {
        question: "What was the first governal general of Pakistan",
        options: ["Liaquat Ali khan", "Allama Iqbal", "Iskandar Mirza", "Muhammad Ali Jinnah"],
        answer: "Muhammad Ali Jinnah"
    },
    {
        question: "Who many districts in Pakistan?",
        options: ["142", "152", "168", "170"],
        answer: "170"
    },
    {
        question: "Which of the following is correct?",
        options: ["Bussines", "Busness", "Bussiness", "Business"],
        answer: "Business"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        answer: "Shakespeare"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        answer: "Blue Whale"
    },
    {
        question: "What is Capital of Azad Jamu Kashimir>",
        options: ["Muzafarabad", "Gilgit", "Mansoro", "Aptabad"],
        answer: "Muzafarabad"
    },
    {
        question: "What is the National Game of Pakistan?",
        options: ["Cricket", "Hokey", "Foatball", "Batmentam"],
        answer: "Hokey"
    },
    {
        question: "What is square of 15?",
        options: ["169", "196", "225", "256"],
        answer: "225"
    },
    {
        question: "What is the  square of 19?",
        options: ["256", "361", "391", "400"],
        answer: "361"
    },
    
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 40;
let timer;

const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const nextButton = document.getElementById('next-btn');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-btn');

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showResult();
        }
    }, 1000);
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        answersElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        clearInterval(timer);
        showResult();
    }
}

function nextQuestion() {
    loadQuestion();
}

function showResult() {
    questionElement.textContent = "Knowledge Over!";
    answersElement.innerHTML = "";
    scoreElement.textContent = score;
    resultElement.style.display = 'block';
    nextButton.style.display = 'none';
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    timeLeft = 40;
    resultElement.style.display = 'none';
    nextButton.style.display = 'block';
    startTimer();
    loadQuestion();
}

window.onload = () => {
    startTimer();
    loadQuestion();
};
