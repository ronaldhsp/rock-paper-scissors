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
  playerSelection = playerSelection.toLowerCase();
  computerSelection = playerSelection.toLowerCase();

  let playerWins = (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper");

  return playerWins;
}

function game() {
  // call play round for a 5 round game
  let points = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = capitalize(prompt("Rock? Paper? Or scissors?"));
    let computerSelection = capitalize(getComputerChoice());
    let playerWins = playRound(playerSelection, computerSelection);
    
    if (playerWins) {
      points++;
      console.log(`You win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
    } else if (playerSelection === computerSelection) {
      console.log("Draw!");
    } else {
      console.log(`You lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
    }
  }

  if (points >= 3) {
    console.log(`You won the game with ${points}/5 points!`);
  } else {
    console.log(`You lost the game with ${points}/5 points!`);
  }
}

game();
