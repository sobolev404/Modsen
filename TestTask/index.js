// 1. How many planets are in the solar system? (8, 9, 10)
// 2. What is the freezing point of water? (0, -5, -6)
// 3. What is the longest river in the world? (Nile, Amazon, Yangtze)
// 4. How many chromosomes are in the human genome? (42, 44, 46)
// 5. Which of these characters are friends with Harry Potter? (Ron Weasley, Draco Malfoy, Hermione Granger)
// 6. What is the capital of Canada? (Toronto, Ottawa, Vancouver)
// 7. What is the Jewish New Year called? (Hanukkah, Yom Kippur, Kwanzaa)
let totalScore = 0;
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

// for(let i=0;i<questionsList.length;i++){
//     console.log(questionsList[i].questionTitle)
//     for(let numberOfAnswer=0;numberOfAnswer<questionsList[i].answersList.length;numberOfAnswer++){
//         console.log(questionsList[i].answersList[numberOfAnswer][0])
//     }
//     console.log()
// }

let randomQuestionOrAnswer = function(arr){
  let newArr = []
  while(newArr.length!==arr.length){
   let a = arr[Math.floor(Math.random() * arr.length)]
   if (!newArr.includes(a)){
       newArr.push(a)
   }
  }
  return newArr
}

let questionNumber = 0;
let randomQuestions = randomQuestionOrAnswer(questionsList);

const content = document.getElementById("content");

let displayQuestion = function (numberOfQuestion) {
  let answerSelected = false;
  content.innerHTML = ` <h1 class="questionNumber">Question ${
    numberOfQuestion + 1
  }/${randomQuestions.length}</h1>
        <h2 class="question">${
          randomQuestions[numberOfQuestion].questionTitle
        }</h2>
        <div class="answersButtons" id="listAnswers">
        </div>`;
  const listAnswers = document.getElementById("listAnswers");
  let randomAnswers = randomQuestionOrAnswer(randomQuestions[numberOfQuestion].answersList);
  for (let numberOfAnswer = 0; numberOfAnswer < randomAnswers.length; numberOfAnswer++) {
    listAnswers.insertAdjacentHTML(
      "beforeend",
      getAnswer(randomAnswers, numberOfAnswer)
    );
  }
  listAnswers.onclick = function (event) {
    if (answerSelected) return;
    if (event.target.dataset.type === "true") {
      answerSelected = true;
      event.target.style.backgroundColor = "green";
      totalScore += 1;
      setTimeout(function () {
        if (numberOfQuestion + 1 < randomQuestions.length) {
          displayQuestion(numberOfQuestion + 1); // Переходим к следующему вопросу
        } else {
          questionNumber = 0;
  
          content.innerHTML = `<h1 style="text-align:center">That's all! Your score: ${totalScore} </h1>
          <div class="btnRestCont"><div class="btn_restart"><button id="restart">Play again</button></div></div>`;
          const btnRestart = document.getElementById("restart");
          btnRestart.onclick = function () {
            totalScore = 0;
            displayQuestion(questionNumber);
            randomQuestions = randomQuestionOrAnswer(questionsList);
          };
        }
      }, 2000);
    } else if((event.target.dataset.type === "false")){
      answerSelected = true;

      event.target.style.backgroundColor = "red";
      setTimeout(function () {
        if (numberOfQuestion + 1 < randomQuestions.length) {
          displayQuestion(numberOfQuestion + 1); // Переходим к следующему вопросу
        } else {
          questionNumber = 0;
  
          content.innerHTML = `<h1 style="text-align:center">That's all! Your score: ${totalScore} </h1>
          <div class="btnRestCont"><div class="btn_restart"><button id="restart">Play again</button></div></div>`;
          const btnRestart = document.getElementById("restart");
          btnRestart.onclick = function () {
            totalScore = 0;
            displayQuestion(questionNumber);
            randomQuestions = randomQuestionOrAnswer(questionsList);
          };
        }
      }, 2000);
    }

     // Задержка перед переходом к следующему вопросу
  };
};

function getAnswer(randomAnswers, answerIndex) {
  return `<button class="btn_answer" data-index="${answerIndex}" data-type="${randomAnswers[answerIndex][1]}">${randomAnswers[answerIndex][0]}</button>`;
}
displayQuestion(questionNumber);

// listAnswers.onclick = function(event){
//     if(event.target.dataset.type==='true'){
//         event.target.style.backgroundColor = "green";
//     }else{
//         event.target.style.backgroundColor = "red";
//     }
//   }


