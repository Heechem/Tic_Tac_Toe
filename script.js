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
  // const arr = [['','',''], ['','',], []];

  const playerTurn = document.querySelector('.game_info');
  const boardGame = document.getElementById('board');
  const cells = document.querySelectorAll('.cell');
  const cellsId = document.querySelectorAll('[data-pos]');
  const player1 = { name: 'Player 1', class: 'player_one', input: 'X' };
  const player2 = { name: 'Player 2', class: 'player_two', input: 'O' };
  let defaultPlayer = player1;
  playerTurn.textContent = 'player 1 start please ';
  const currentClass = defaultPlayer ? player1.class : player2.class;

  // Switch the player
  function switchPlayer() {
    defaultPlayer == player1
      ? (defaultPlayer = player2)
      : (defaultPlayer = player1);
    playerTurn.textContent = `${defaultPlayer.name}'s turn`;
  }

  // function boardGrid() {
  //   const arr = [];
  //   const n = 3;
  //   const m = 3;
  //   for (let i = 0; i < n; i++) {
  //     arr.push(new Array(m).fill(''));
  //   }

  // function inputChoice(index, choice) {
  //   arr.map((el) => {
  //     if (choice <= 3) {
  //       el.splice(index, 1, choice);
  //     }
  //     el.push(defaultPlayer.input);
  //   });
  //   console.log(arr);
  // }
  // inputChoice();
  // }

  function handlclik() {
    boardGame.addEventListener('click', (e) => {
      const choice = e.target;

      if (choice.dataset) {
        cellsId.forEach((cell) => {
          if (choice.textContent == '') {
            choice.textContent = defaultPlayer.input;
            if (defaultPlayer == player1) {
              choice.classList.add('player_one');
            } else {
              choice.classList.add('player_two');
            }
            let classGame = choice.className;
            console.log(classGame);
            if (checkwinner(cell)) {
              console.log('yes');
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

  function checkwinner(cell) {
    return winnersCombnination.some((combinations) => {
      return combinations.every((index) => {
        return console.log(cellsId[index].classList.contains(currentClass));

        // return cells[index].className.contains(classGame);
      });
    });
  }
})();
// display the player selection
// function handlclik() {
//   boardGame.addEventListener('click', (e) => {
//     let choice = e.target.dataset;

//     if (e.target.dataset) {
//       cellsId.forEach((cell) => {
//         if (e.target.textContent == '') {
//           e.target.textContent = defaultPlayer.input;
//           if (defaultPlayer == player1) {
//             e.target.classList.add('player_one');
//           } else {
//             e.target.classList.add('player_two');
//           }
//           let classGame = e.target.className;
//           console.log(classGame);

//           switchPlayer();
//           if (checkwinner(classGame)) {
//             console.log('yes');
//           }
//         } else {
//           return;
//         }
//       });
//     }
//   });
// }

// grid creation

// function boardGrid() {
//   const arr = [];
//   const n = 3;
//   const m = 3;
//   for (let i = 0; i < n; i++) {
//     arr.push(new Array(m).fill(null));
//   }

//   function inputChoice() {
//     arr.map((el) => {
//       el.push(defaultPlayer.input);
//     });
//     console.log(arr);
//   }
//   inputChoice();
// }

// push the choice of the palyer into the greed
