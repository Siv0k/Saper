let gameBoard = [];
function GetBoardSize() {
    if (gameBoard.length != 0) {
        let buttons = document.querySelectorAll('div > button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].remove();
        }
        gameBoard.length = 0;
        let boardSize = document.querySelector('input').value;
        gameBoard.length = boardSize;
    } else {
        let boardSize = document.querySelector('input').value;
        gameBoard.length = boardSize;
    }
    for (let i = 0; i < gameBoard.length; i++) {
        GameBoard.insertAdjacentHTML('beforeend', '<button></button>');
    }
}

