/*
*variable declaration for DOM elements
*possible selections and results
*/
const buttons = document.querySelectorAll(".buttons");
const playerImage = document.getElementById("player-image");
const cpuImage = document.getElementById("cpu-image");
const possibleSelections = ["Rock", "Paper", "Scissors"];
const result = document.getElementById("result-display");

/*
*declared variable to 
*display how many games 
*are won.
*/
let playerScore = 0;
let cpuScore = 0;

/*
*added click event listener
*/
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const playerChoice = Number(this.getAttribute("data-choice"));
    let selection = playGame(playerChoice);
    compareResults(playerChoice, selection);
    updateScore();
  });
});

/*
*Added a playgame function,
*that takes in the value of playerchoice
*/

function playGame(playerChoice) {
  playerImage.src = `assets/images/${possibleSelections[
    playerChoice
  ].toLowerCase()}.png`;
  playerImage.alt = possibleSelections[playerChoice];

  let cpuChoice = Math.floor(Math.random() * possibleSelections.length);
}
