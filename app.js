const { faSquareShareNodes } = require('@fortawesome/free-solid-svg-icons');

document.addEventListener('DOMContentLoader', () => {
  const grid = document.querySelector('.grid');
  const scoreDisplay = document.getElementById('score');
  const width = 28; //28 x 28 = 784 squares

  const layout = [];

  //Legend
  //0 - pac-dot
  //1 - wall
  //2 - ghost-lair
  //3 - power-pellet
  //4 - empty

  // draw the grid and render it

  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div');
      grid.appendChild(square);
      squares.push(square);

      // add layout to the board
      if (layout[i] === 0) {
        squares[i].classList.add('pac-dot');
      } else if (layout[i] === 1) {
        squares[i].classList.add('wall');
      } else if (layout[i] === 3) {
        squares[i].classList.add('power-pellet');
      }
    }
  }
});

createBoard();

//starting position of pac-man
let pacmanCurrent;
