const quizData = [
  {
    question: "When is the best time to look for mushrooms in Danish forests?",
    a: "Spring",
    b: "Summer",
    c: "Autumn",
    d: "Winter",
    correct: "a",
  },
  {
    question: "Which mushroom is safe to eat and often found in Danish forests?",
    a: "Red mushroom",
    b: "Blue mushroom",
    c: "Yellow mushroom",
    d: "Brown mushroom",
    correct: "d",
  },
  {
    question: "Which mushroom should you never touch because it can make you sick?",
    a: "Green mushrooms",
    b: "Yellow mushrooms",
    c: "Red mushrooms with white dots",
    d: "Orange mushrooms",
    correct: "c",
  },
  {
    question: "Where are mushrooms usually found in the forest?",
    a: "Under rocks",
    b: "On tree branches",
    c: "Near water",
    d: "On the ground",
    correct: "d",
  },
  {
    question: "What should you wear when handling mushrooms?",
    a: "Gloves",
    b: "Sunglasses",
    c: "Scarf",
    d: "Raincoat",
    correct: "a",
  },
  {
    question: "Which sign indicates that a mushroom might be dangerous?",
    a: "It smells good",
    b: "It's very colorful",
    c: "It's growing fast",
    d: "It has a slimy texture",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const loadingProgress = document.getElementById("loading-bar-progress");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    loadingProgress.style.width = `${(currentQuiz * 100) / quizData.length}%`;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                  <h2>You answered ${score}/${quizData.length} questions correctly</h2>
  
                  <button onclick="location.reload()">Reload <i class="fa-solid fa-arrows-rotate"></i></button>
              `;
    }
  }
});
