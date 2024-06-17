// 1. How many planets are in the solar system? (8, 9, 10)
// 2. What is the freezing point of water? (0, -5, -6)
// 3. What is the longest river in the world? (Nile, Amazon, Yangtze)
// 4. How many chromosomes are in the human genome? (42, 44, 46)
// 5. Which of these characters are friends with Harry Potter? (Ron Weasley, Draco Malfoy, Hermione Granger)
// 6. What is the capital of Canada? (Toronto, Ottawa, Vancouver)
// 7. What is the Jewish New Year called? (Hanukkah, Yom Kippur, Kwanzaa)
const questionsList = [
  {
    questionTitle: "How many planets are in the solar system?",
    answersList: [
      ["9", false],
      ["10", false],
      ["7", false],
      ["8", true],
    ],
  },
  {
    questionTitle: "What is the freezing point of water?",
    answersList: [
      ["0", true],
      ["-6", false],
      ["-10", false],
      ["10", false],
    ],
  },
  {
    questionTitle: "What is the longest river in the world?",
    answersList: [
      ["Nile", false],
      ["Amazon", true],
      ["Yangtze", false],
      ["Dnepr", false],
    ],
  },
  {
    questionTitle: "What is the capital of Canada",
    answersList: [
      ["Toronto", false],
      ["Zhlobin", false],
      ["Vancouver", false],
      ["Ottawa", true],
    ],
  },
  {
    questionTitle: "How many chromosomes are in the human genome?",
    answersList: [
      ["42", false],
      ["44", false],
      ["46", true],
      ["47", false],
    ],
  },
];

const content = document.getElementById("content");
play();

function play() {
  const questionsInRandomOrder = randomQuestionOrAnswer(questionsList);
  let totalScore = 0;
  let questionNumber = 0;

  displayNextQuestion(questionsInRandomOrder, questionNumber, totalScore);
}

//////////////// ПЕРЕМЕШКА ВОПРОСОВ И ОТВЕТОВ
function randomQuestionOrAnswer(arr) {
  let newArr = [];
  while (newArr.length !== arr.length) {
    let a = arr[Math.floor(Math.random() * arr.length)];
    if (!newArr.includes(a)) {
      newArr.push(a);
    }
  }
  return newArr;
}

/////////////// ВЫВОД ТЕКУЩЕГО ВОПРОСА
function displayNextQuestion(
  questionsInRandomOrder,
  questionNumber,
  totalScore
) {
  if (questionNumber < questionsInRandomOrder.length) {
    displayQuestionTitle(questionsInRandomOrder, questionNumber);
    let answersInRandomOrder = randomQuestionOrAnswer(
      questionsInRandomOrder[questionNumber].answersList
    );
    displayAnswers(answersInRandomOrder);
    let isAnswerSelected = false;
    listAnswers.onclick = function (event) {
      if (isAnswerSelected) return;
      if (event.target.dataset.type === "true") {
        isAnswerSelected = true;
        event.target.style.backgroundColor = "green";
        totalScore += 1;
        setTimeout(() => displayNextQuestion(questionsInRandomOrder, questionNumber + 1, totalScore), 1000);
      } else if (event.target.dataset.type === "false") {
        isAnswerSelected = true;
        event.target.style.backgroundColor = "red";
        setTimeout(() => displayNextQuestion(questionsInRandomOrder, questionNumber + 1, totalScore), 1000);
      }
    };
  } else {
    endOfTheGame(totalScore);
  }
}

////////////// КОНЕЦ ИГРЫ
function endOfTheGame(totalScore) {
  content.innerHTML = `<h1 style="text-align:center">That's all! Your score: ${totalScore} </h1>
      <div class="btnRestCont"><div class="btn_restart"><button id="restart">Play again</button></div></div>`;
  const btnRestart = document.getElementById("restart");
  btnRestart.onclick = function () {
    play();
  };
}

/////////////// ВЫВОД ВАРИАНТОВ ОТВЕТОВ
function displayAnswers(answersArr) {
  const listAnswers = document.getElementById("listAnswers");
  for (
    let numberOfAnswer = 0;
    numberOfAnswer < answersArr.length;
    numberOfAnswer++
  ) {
    listAnswers.insertAdjacentHTML(
      "beforeend",
      getAnswer(answersArr, numberOfAnswer)
    );
  }
}
function getAnswer(answersArr, answerIndex) {
  return `<button class="btn_answer" data-index="${answerIndex}" data-type="${answersArr[answerIndex][1]}">${answersArr[answerIndex][0]}</button>`;
}

////////////////ВЫВОД ВОПРОСА И ЕГО НОМЕРА
function displayQuestionTitle(questionArr, question) {
  return (content.innerHTML = ` <h1 class="questionNumber">Question ${
    question + 1
  }/${questionArr.length}</h1>
        <h2 class="question">${questionArr[question].questionTitle}</h2>
        <div class="answersButtons" id="listAnswers">
        </div>`);
}
