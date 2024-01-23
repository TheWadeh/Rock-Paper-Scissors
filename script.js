"use strict";

alert("are you ready to play the game : ");

const choice = ["rock", "scissors", "paper"];

function getComputerChoice() {
    return Math.floor(Math.random()*choice.length);
}

const playerChoice = prompt(">");
playerChoice.toLowerCase();

const computerChoice = choice[getComputerChoice()];

function playGround() { 
if (playerChoice === computerChoice) {
    console.log("it is a draw");
} else if (playerChoice == "rock" && computerChoice == "scissors"||
          playerChoice == "scissors" && computerChoice == "paper"||
          playerChoice == "paper" && computerChoice == "rock") {
    console.log("you won !");
} else {
    console.log("computer won !");
}
}

playGround();



