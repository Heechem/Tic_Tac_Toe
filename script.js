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
  const winnerArr = [];

  const playerTurn = document.querySelector('.game_info');
  const boardGame = document.getElementById('board');
  const cells = document.querySelectorAll('.cell');
  const cellsId = document.querySelectorAll('[data-pos]');
  const player1 = { name: 'Player 1', class: 'player_one', input: 'X' };
  const player2 = { name: 'Player 2', class: 'player_two', input: 'O' };
  const paragraphe = document.querySelector('p');
  const WinningDisplay = document.querySelector('.winner');
  const restartBtn = document.querySelector('.restart');
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
      const choice = e.target;
      //adding the class to check the winner
      const currentClass =
        defaultPlayer === player1 ? player1.class : player2.class;

      if (choice.dataset) {
        cellsId.forEach((cell) => {
          if (choice.textContent == '') {
            choice.textContent = defaultPlayer.input;
            if (defaultPlayer === player1) {
              choice.classList.add(currentClass);
            } else {
              choice.classList.add(currentClass);
            }
            let classGame = choice.className;
            console.log(classGame);
            checkWinner(currentClass);
            if (endGame(currentClass)) {
              console.log('yes');
              WinningDisplay.classList.add('show');
            }
            if (!endGame(currentClass) && winnerArr.length === 9) {
              WinningDisplay.classList.add('show');
              paragraphe.innerText = `Its a tie , restart the game`;
            }

            switchPlayer();
          } else {
            return;
          }
        });
      }
    });
  }
  handlclik();

  //check the end of the game

  function checkWinner(currentClass) {
    winnerArr.push(currentClass);

    console.log(winnerArr);
  }

  function endGame(currentClass) {
    return winnersCombnination.some((combinations) => {
      return combinations.every((index) => {
        return cellsId[index].classList.contains(currentClass);
      });
    });
  }
})();
