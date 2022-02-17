/*
*variable declaration for DOM elements
*possible selections and results
*/
const options = document.querySelectorAll(".options");
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

