const startBtn = document.getElementById('start-btn');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');

let questions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
        answer: 2
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        options: ['Harper Lee', 'J.K. Rowling', 'Ernest Hemingway', 'Mark Twain'],
        answer: 0
    },
    {
        question: 'Which planet is closest to the sun?',
        options: ['Earth', 'Venus', 'Mercury', 'Mars'],
        answer: 2
    }
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

function startQuiz() {
    startBtn.style.display = 'none';
    quiz.style.display = 'block';
    showQuestion();
    startTimer();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;
    optionsEl.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        let btn = document.createElement('button');
        btn.classList.add('option');
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestionIndex].answer) {
        score++;
        scoreEl.innerText = `Score: ${score}`;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.innerText = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    quiz.innerHTML = `<h2>Your Score: ${score}</h2>`;
    clearInterval(timerInterval);
}

startBtn.addEventListener('click', startQuiz);
function startQuiz(difficulty) {
    // Set different timers based on difficulty
    if (difficulty === 'easy') {
        timeLeft = 60;
    } else if (difficulty === 'medium') {
        timeLeft = 30;
    } else {
        timeLeft = 15;
    }
    
    // Other initialization code
    startBtn.style.display = 'none';
    quiz.style.display = 'block';
    showQuestion();
    startTimer();
}
