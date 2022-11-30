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
  // return a string that declares the winner in the format "You lose/win! ... beats ..."
  playerSelection = capitalize(playerSelection);
  computerSelection = capitalize(computerSelection);

  let playerWins = (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper");

  if (playerWins) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return "Draw!";
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  // call play round for a 5 round game
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock? Paper? Or scissors?");
    console.log(playRound(playerSelection, getComputerChoice()));
  }
}

game();
