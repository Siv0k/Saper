let gameBoard = [];
function GetBoardSize() {
    let boardSize = document.querySelector('input').value;
    gameBoard.length = boardSize;
    for (let i = 0; i < gameBoard.length; i++) {
        GameBoard.insertAdjacentHTML('beforeend', '<button></button>');
    }
}

