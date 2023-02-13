/* eslint-disable linebreak-style */
const BTN_VALIDEZ = document.querySelector("button");
const DIV_CACHE = document.querySelector(".avant");
const DIV_AFFICHE = document.querySelector(".active");
const questions = [
  {
    answers: document.querySelectorAll("#r1"),
    // eslint-disable-next-line linebreak-style
    correctAnswer: 0,
  },
  {
    answers: document.querySelectorAll("#r2"),
    correctAnswer: 0,
  },
  // eslint-disable-next-line linebreak-style
  {
    answers: document.querySelectorAll("#r3"),
    // eslint-disable-next-line indent
    correctAnswer: 0,
  },
  {
    answers: document.querySelectorAll("#r4"),
    correctAnswer: 0,
  },

  {
    answers: document.querySelectorAll("#r5"),
    correctAnswer: 0,
  },
];

const ALLDIV = document.querySelectorAll(".divQuiz");
let sum = 0;
// console.log("sum:", zsum);

BTN_VALIDEZ.addEventListener("click", () => {
  questions.forEach((question, index) => {
    const answers = question.answers;
    const correctAnswer = question.correctAnswer;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        ALLDIV.style.background = "#CD5C5C";
      }
      break;
    }
  });
});

//   questions.forEach((question, index) => {
//     const correctAnswer = question.correctAnswer;
//     const answers = question.answers;

// for (let i = 0; i < answers.length; i++) {

//   if (answers[i].checked) {
// const backgroundColor =

//  if( i === correctAnswer ){
//    ALLDIV[index].style.background = '#3cb371';
//    sum = sum++
//  }else{ALLDIV[index].style.background = '#CD5C5C';
//  }
// ALLDIV[index].style.background = backgroundColor;

//   }
// }

//   });
//   console.log(sum)
// });

// const tab = [-7,-12,-3,-9,-1,-6]

// let temperatures = tab;

// let closest = 0;
// if (temperatures.length > 0) {
//   closest = temperatures[0];

//   for (let i = 1; i < temperatures.length; i++) {
//     if (Math.abs(temperatures[i]) < Math.abs(closest)) {
//       closest = temperatures[i];
//     } else if (Math.abs(temperatures[i]) === Math.abs(closest) && temperatures[i] > 0) {
//       closest = temperatures[i];
//     }
//   }
// }
// let result =0
// let valeur ;

// for (let i = 0; i < temperatures.length; i++) {
//         const t = parseInt(temperatures[i]);// a temperature expressed as an integer ranging from -273 to 5526
//     if(t > 0){
//         result = Math.min(...temperatures)
//     }
//     if(t < 0){
//         result = Math.max(...temperatures)
//     }
//     if(temperatures.length !== 0){
//         valeur = Math.abs(temperatures[i])

//         result = Math.min(valeur)
//     }
// }
//  console.log(valeur)
// console.log(result);
