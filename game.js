"use strict";

function getComputerChoice() {
  // randomly return rock, paper or scissors
  const CHOICES = ["rock", "paper", "scissors"];
  let choiceNum = Math.floor(Math.random() * 3) % 3;
  return CHOICES[choiceNum];
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return 0;
  }

  let playerWins = (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper");
  return playerWins ? 1 : -1;
}

function game() {
  // call play round for a 5 round game
  let points = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = capitalize(prompt("Rock? Paper? Or scissors?"));
    let computerSelection = capitalize(getComputerChoice());
    let winner = playRound(playerSelection, computerSelection);

    switch (winner) {
      case 1:
        points++;
        console.log(`You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
        break;
      case 0:
        console.log("Draw!");
        break;
      case -1:
        console.log(`You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
        break;
      default:
        console.log("Round defaulted.");
    }
  }

  if (points >= 3) {
    console.log(`You won the game with ${points}/5 points!`);
  } else {
    console.log(`You lost the game with ${points}/5 points!`);
  }
}

game();
