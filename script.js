'use strict';

// IIFE for create the players

(function game() {
  const playerTurn = document.querySelector('.game_info');
  const boardGame = document.querySelector('.board');
  const cells = document.querySelectorAll('.cell');
  const cellsId = document.querySelectorAll('[data-pos]');
  const player1 = { name: 'Player 1', input: 'X' };
  const player2 = { name: 'Player 2', input: 'O' };
  let defaultPlayer = player1;

  // Switch the player
  function switchPlayer() {
    defaultPlayer == player1
      ? (defaultPlayer = player2)
      : (defaultPlayer = player1);
    playerTurn.textContent = `${defaultPlayer.name}'s turn`;
  }

  // grid creation
  function boardGrid() {
    let arr = [];
    const n = 3;
    const m = 3;
    for (let i = 0; i < n; i++) {
      arr.push(new Array(m).fill(null));
    }
    console.log(arr);
  }

  boardGrid();
  boardGame.addEventListener('click', (e) => {
    let choice = e.target.dataset;
    if (e.target.dataset) {
      console.log(choice);

      cellsId.forEach((cell, index) => {
        if (e.target.textContent == '') {
          e.target.textContent = defaultPlayer.input;
          switchPlayer();
        }
        return;
      });
    }
  });

  // push the choice of the palyer into the greed

  function inputChoice() {
    let value;
    const getValue = () => {
      value = defaultPlayer.input;
    };
    return { getValue };
  }
  inputChoice();
})();
