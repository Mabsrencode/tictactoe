const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backDropElement = document.getElementById("backdrop");
const errorBackground = document.getElementById("error-background");
const formELement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-error");
const gameAreaElement = document.getElementById("active-game");
const warningInputElement = document.getElementById("warning-input");
const activePlayerNameElement = document.getElementById("active-player-name");
const playerDisplay = document.getElementById("game-players");
const gameOverElement = document.getElementById("game-over");


const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");
const okayWarningBtn = document.getElementById("warning-okay-btn");
// const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById("game-board");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backDropElement.addEventListener("click", closePlayerConfig);

formELement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener('click', startNewGame);

okayWarningBtn.addEventListener('click', closeErrorInputElement);

// for (const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener('click', selectGameField);
// }

gameBoardElement.addEventListener('click', selectGameField);