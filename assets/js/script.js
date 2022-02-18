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

  cpuImage.src = `assets/images/${possibleSelections[
    cpuChoice
  ].toLowerCase()}.png`;
  cpuImage.style.transform = "scaleX(-1)";
  cpuImage.alt = possibleSelections[cpuChoice];
  return cpuChoice;
}

/*
*Added a compare result function which
*takes in an if statement
*that checks player choice with respect
*computer choice.*
*/

function compareResults(playerChoice, cpuChoice) {

  
}