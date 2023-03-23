function resetGameStatus(){
  activePlayer = 0;
  currentRound = 0;
  gameOverElement.firstElementChild.innerHTML = 'You won!, <span id"winner-name">PLAYER NAME</span>!';
  gameOverElement.style.display = 'none';

  let gameBoardIndex = 0;
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      gameData[i][j] = 0;
      const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
      gameBoardItemElement.textContent = "";
      gameBoardItemElement.classList.remove('disabled');
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    warningInputElement.style.display = "block";
    backDropElement.style.display = "block";
    return;
  }

  resetGameStatus();
  playerDisplay.style.display = "none";
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI") {
    return;
  }

  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    gameBoardElement.classList.add("wiggle-error");
    errorBackground.style.display = "block";
    errorBackground.classList.add("error-background");
    return;
  } else {
    gameBoardElement.classList.remove("wiggle-error");
    errorBackground.style.display = "none";
    errorBackground.classList.add("error-background");
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  
  const winnerId = checkForGameOver();

  if(winnerId !== 0){
    endGame(winnerId);
  }
  
currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }
  if(currentRound === 9){
    return -1;
  }
  return 0;
}

function endGame(winnerId){
  gameOverElement.style.display = 'block';
  if(winnerId > 0){
    playerDisplay.style.display = "flex";
    const winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
  }else{
    playerDisplay.style.display = "flex";
    gameAreaElement.firstElementChild.firstElementChild.textContent = 'It\'s a draw!';
  }
}