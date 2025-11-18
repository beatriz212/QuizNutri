
   const questions = [
    {
        question: "Qual é a principal função das proteínas no corpo humano?",
        answers: [
            { text: "Fornecer energia imediata", correct: false },
            { text: "Regular a temperatura corporal", correct: false },
            { text: "Construir e reparar tecidos", correct: true },
            { text: "Aumentar o colesterol", correct: false }
        ]
    },
    {
        question: "Qual destes alimentos é uma boa fonte de gordura saudável?",
        answers: [
            { text: "Abacate", correct: true },
            { text: "Refrigerante", correct: false },
            { text: "Biscoito recheado", correct: false },
            { text: "Margarina hidrogenada", correct: false }
        ]
    },
    {
        question: "Qual mineral é essencial para a formação dos ossos?",
        answers: [
            { text: "Ferro", correct: false },
            { text: "Cálcio", correct: true },
            { text: "Sódio", correct: false },
            { text: "Cobre", correct: false }
        ]
    },
    {
        question: "O que significa a sigla IMC?",
        answers: [
            { text: "Índice de Massa Corporal", correct: true },
            { text: "Índice de Metabolismo Celular", correct: false },
            { text: "Ingestão Média de Cálcio", correct: false },
            { text: "Indicador de Massa Calórica", correct: false }
        ]
    },
    {
        question: "Qual vitamina é produzida quando nos expomos ao sol?",
        answers: [
            { text: "Vitamina D", correct: true },
            { text: "Vitamina C", correct: false },
            { text: "Vitamina A", correct: false },
            { text: "Vitamina B12", correct: false }
        ]
    },
    {
        question: "Qual grupo alimentar deve compor a base da pirâmide alimentar?",
        answers: [
            { text: "Cereais e tubérculos", correct: true },
            { text: "Carnes e ovos", correct: false },
            { text: "Doces e açúcares", correct: false },
            { text: "Óleos e gorduras", correct: false }
        ]
    },
    {
        question: "Qual destes alimentos é rico em ferro?",
        answers: [
            { text: "Feijão", correct: true },
            { text: "Leite", correct: false },
            { text: "Arroz branco", correct: false },
            { text: "Cenoura", correct: false }
        ]
    },
    {
        question: "Qual a recomendação diária média de ingestão de água para um adulto?",
        answers: [
            { text: "500 ml", correct: false },
            { text: "1 litro", correct: false },
            { text: "2 litros", correct: true },
            { text: "5 litros", correct: false }
        ]
    },
    {
        question: "Qual vitamina é conhecida por fortalecer o sistema imunológico?",
        answers: [
            { text: "Vitamina C", correct: true },
            { text: "Vitamina B1", correct: false },
            { text: "Vitamina K", correct: false },
            { text: "Vitamina E", correct: false }
        ]
    },
    {
        question: "Qual é o principal nutriente presente nas frutas?",
        answers: [
            { text: "Carboidratos simples e fibras", correct: true },
            { text: "Proteínas", correct: false },
            { text: "Gorduras saturadas", correct: false },
            { text: "Sódio", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const voltarButton = document.getElementById("voltar");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(button, correct) {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(b => b.disabled = true);

    if (correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("incorrect");
    }

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length} perguntas! 🥦`;
    nextButton.innerHTML = "Reiniciar";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

voltarButton.addEventListener("click", () => {
    window.location.href = "home.html";
});

startQuiz();
