/*
*variable declaration for DOM elements
*possible selections and results
*/
const buttons = document.querySelectorAll(".buttons");
const playerImage = document.getElementById("player-image");
const cpuImage = document.getElementById("cpu-image");
const possibleSelections = ["Rock", "Paper", "Scissors"];
const result = document.getElementById("result-display");
const spinner = document.getElementById("spinner");
const loading = document.getElementById('loading');

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
    //check the result and update score
    compareResults(playerChoice, selection);
    updateScore();
    //check the winner or loser
    if (checkWinner()) {
      playerScore = cpuScore = 0;
      updateScore();
  }
  });
});

/*
*Added a playgame function,
*that takes in the value of playerchoice
*/
// credit: code institue Project  Portfolio 2 Portfolio Project Scope video
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
  const gamePlay = `${playerChoice} vs ${cpuChoice}`;
// to check each player and computer conditions
switch (playerChoice) {
  case 0:
    // rock
    switch (cpuChoice) {
      case 0:
        //"rock vs rock"
        result.textContent = "It's a draw!";
        result.style.color = "white";
        break;
      case 1:
        //"rock vs paper"
        result.textContent = "You lose!";
        result.style.color = "red";
        cpuScore++;
        break;
      case 2:
        //"rock vs scissors";
        result.textContent = "You win!";
        result.style.color = "green";
        playerScore++;
        break;
      default:
    }
    break;
    case 1:
      // paper
      switch (cpuChoice) {
        case 0:
          //"paper vs rock"
          result.textContent = "You win!";
          result.style.color = "green";
          playerScore++;
          break;
        case 1:
          //"paper vs paper"
          result.textContent = "It's a draw!";
          result.style.color = "white";
          break;
        case 2:
         //"paper vs scissors"
          result.textContent = "You lose!";
          result.style.color = "red";
          cpuScore++;
          break;
        default:
      }
      break;
    case 2:
      // scissors
      switch (cpuChoice) {
        case 0:
          //"scissors vs rock"
          result.textContent = "You lose!";
          result.style.color = "red";
          cpuScore++;
          break;
        case 1:
          //"scissors vs paper"
          result.textContent = "You win!";
          result.style.color = "green";
          playerScore++;
          break;
        case 2:
          //"scissors vs scissors"
          result.textContent = "It's a draw!";
          result.style.color = "white";
          break;
        default:
      }
      break;
    default:
  }
}

/*
*Added an update score function which
*that updates the score after each game.
*/

function updateScore() {
  document.getElementById("user-score").innerHTML = playerScore;
  document.getElementById("cpu-score").innerHTML = cpuScore;
}
/*
*Added an check winner function which
*that checks the winner after 10 game play.
*credit: https://sebhastian.com/rock-paper-scissors-javascript/
*/
function checkWinner() {
  if (playerScore === 10 || cpuScore === 10) {
    const winner =
      playerScore === 10
        ? result.textContent = "You win the game! Congratulations!"
        : result.textContent = "Game Over! You Lose!";
    return true;
  }
  return false;
}


// Show spinner before gameplay
setTimeout(() => {
  loading.remove();
  spinner.style.display = 'flex';
}, 3000);
