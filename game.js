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

function game() {
  // call play round for a 5 round game
  let playerPoints = 0;
  let computerPoints = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock? Paper? Or scissors?");
    let computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);

    switch (winner) {
      case 1:
        playerPoints++;
        console.log(`You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
        break;
      case 0:
        console.log("Draw!");
        break;
      case -1:
        computerPoints++;
        console.log(`You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
        break;
      default:
        console.log("Round defaulted.");
    }
  }

  if (playerPoints > computerPoints) {
    console.log(`You won with ${playerPoints} points vs ${computerPoints} points!`);
  } else if (playerPoints < computerPoints) {
    console.log(`You lost with ${playerPoints} points vs ${computerPoints} points!`);
  } else {
    console.log(`You drawed with ${playerPoints} points vs ${computerPoints} points!`);
  }
}

game();
