"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Jonathan Cantu
      Date:   March 1, 2026

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 40;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timerID;
let questionList = document.querySelectorAll("div#quiz input");

startQuiz.onclick = function() {

  // Stop old timer if it exists
  if (timerID) {
    clearInterval(timerID);
  }

  // Reset time
  timeLeft = quizTime;
  quizClock.value = timeLeft;

  // Clear out old answers
  questionList.forEach(input => input.value = "");

  // Show quiz
  overlay.setAttribute("class", "showquiz");

  // Start new timer
  timerID = setInterval(countdown, 1000);
}

function checkAnswers() {
  let correctCount = 0;

  for (let i = 0; i < questionList.length; i++) {
    if (questionList[i].value === correctAnswers[i]) {
      correctCount++;
    }
  }

  return correctCount;
}

function countdown() {
  timeLeft--;
  quizClock.value = timeLeft;
  if (timeLeft === 0) {
    clearInterval(timerID);
    let totalCorrect = checkAnswers();

    if (totalCorrect === correctAnswers.length) {
      alert("Congratulations! You got all " + totalCorrect + " correct.");
    } else {
      alert("Time's up! You got " + totalCorrect + " correct out of " + correctAnswers.length + ".");
      timeLeft = quizTime;
      quizClock.value = timeLeft;
      overlay.setAttribute("class", "hidequiz");
    }
  }
}
