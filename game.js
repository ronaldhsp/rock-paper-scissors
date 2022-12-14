"use strict";

const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
  // randomly return rock, paper or scissors
  let choiceNum = Math.floor(Math.random() * 3) % 3;
  return CHOICES[choiceNum];
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === null || playerSelection === undefined) {
    return;
  }

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (CHOICES.indexOf(playerSelection) === -1) {
    return;
  }

  if (playerSelection === computerSelection) {
    return 0;
  }

  let playerWins = (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper");
  return playerWins ? 1 : -1;
}

function updateScore() {
  playerScore.textContent = playerPoints;
  computerScore.textContent = computerPoints;
  
  if (playerPoints === 5) {
    scoreboard.textContent = "Congratulations! You won!";
    buttons.forEach(function(btn) { btn.disabled = true; });
  } else if (computerPoints === 5) {
    scoreboard.textContent = "Unfortunately, you lost.";
    buttons.forEach(function(btn) { btn.disabled = true; });
  }
}  

function processInput(e) {
  let playerSelection = e.srcElement.textContent;
  let computerSelection = getComputerChoice();
  let winner = playRound(playerSelection, computerSelection);

  switch (winner) {
    case 1:
      playerPoints++;
      scoreboard.textContent = `You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
      break;
    case 0:
      scoreboard.textContent = "Draw!";
      break;
    case -1:
      computerPoints++;
      scoreboard.textContent = `You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
      break;
    default:
      scoreboard.textContent = "Round defaulted.";
  }

  updateScore();
}

let playerPoints = 0;
let computerPoints = 0;

let buttons = document.querySelectorAll("button");
buttons.forEach(btn => btn.addEventListener("click", processInput));

let scoreboard = document.querySelector(".scoreboard");
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
