'use strict';

// IIFE for create the players

(function game() {
  const winnersCombnination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let winnerArr = [];

  const playerTurn = document.querySelector('.game_info');
  const boardGame = document.getElementById('board');
  const cells = document.querySelectorAll('.cell');
  const cellsId = document.querySelectorAll('[data-pos]');
  const player1 = { name: 'Player 1', class: 'player_one', input: 'X' };
  const player2 = { name: 'Player 2', class: 'player_two', input: 'O' };
  const paragraphe = document.querySelector('p');
  const WinningDisplay = document.querySelector('.winner');
  const restartBtn = document.querySelector('.restart');
  let winner_1 = [];
  let winner_2 = [];
  let defaultPlayer = player1;
  playerTurn.textContent = 'player 1 start please ';

  // Switch the player
  function switchPlayer() {
    defaultPlayer === player1
      ? (defaultPlayer = player2)
      : (defaultPlayer = player1);
    playerTurn.textContent = `${defaultPlayer.name}'s turn`;
  }

  function handlclik() {
    boardGame.addEventListener('click', (e) => {
      console.log(e.target);
      const choice = e.target;
      // adding the class to check the winner
      const currentClass =
        defaultPlayer === player1 ? player1.class : player2.class;

      if (!choice.dataset) return;

      checkWinner(currentClass);
      finalWinner();
      cellsId.forEach((cell) => {
        if (choice.textContent === '') {
          choice.textContent = defaultPlayer.input;
          if (defaultPlayer === player1) {
            choice.classList.add(currentClass);
          } else {
            choice.classList.add(currentClass);
          }
          console.log(winner_1);

          if (endGame(currentClass)) {
            if (winner_1.flat().length > winner_2.flat().length) {
              paragraphe.textContent = `${player1.class} wins`;
            } else {
              paragraphe.textContent = `${player2.class} wins`;
            }

            WinningDisplay.classList.add('show');
          }
          if (!endGame(currentClass) && winnerArr.length === 9) {
            WinningDisplay.classList.add('show');
            paragraphe.innerText = `Its a tie , restart the game`;
          }

          switchPlayer();
        }
      });
    });
  }
  handlclik();

  // check the end of the game

  function checkWinner(currentClass) {
    winnerArr.push(currentClass);
  }

  //  Recongnize the winner

  function finalWinner() {
    winner_1 = winnerArr.filter((el) => el === player1.class);
    winner_2 = winnerArr.filter((el) => el === player2.class);
    return { winner_1, winner_2 };
  }

  function endGame(currentClass) {
    return winnersCombnination.some((combinations) => {
      return combinations.every((index) => {
        return cellsId[index].classList.contains(currentClass);
      });
    });
  }

  //  REstart the game

  function restartGame() {
    cells.forEach((cell) => {
      cell.innerText = '';
      cell.classList = 'cell';
      console.log(cell);
    });
    winner_1 = [];
    winner_2 = [];
    winnerArr = [];

    switchPlayer();
    WinningDisplay.classList.remove('show');
    paragraphe.textContent = '';
    playerTurn.textContent = 'player 1 start please ';
  }

  restartBtn.addEventListener('click', restartGame);
})();
