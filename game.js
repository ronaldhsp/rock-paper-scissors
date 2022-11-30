"use strict";

function getComputerChoice() {
  // randomly return rock, paper or scissors
  const CHOICES = ["rock", "paper", "scissors"];
  let choiceNum = Math.floor(Math.random() * 3) % 3;
  return CHOICES[choiceNum];
}

function playRound(playerSelection, computerSelection) {
  // return a string that declares the winner in the format "You lose/win! ... beats ..."
  let playerWins = (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper");

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
}