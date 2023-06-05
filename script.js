let gameBoard = [];
gameBoard.length = 81;

for (let i = 0; i < gameBoard.length; i++) {
    GameBoard.insertAdjacentHTML('beforeend', '<button></button>');
}