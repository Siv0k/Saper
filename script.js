let gameBoard = [];
function GetBoardSize() {
    let boardSizeHight = document.getElementById('GameBoardHight').value;
    let boardSizeWidht = document.getElementById('GameBoardWidht').value;
    if (gameBoard.length != 0) {
        let buttons = document.querySelectorAll('div > button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].remove();
        }
        gameBoard.length = 0;
        gameBoard.length = (boardSizeHight * boardSizeWidht);
    } else {
        gameBoard.length = (boardSizeHight * boardSizeWidht);
    }
    for (let i = 0; i < gameBoard.length; i++) {
        
        if (i % boardSizeWidht == 0) {
            document.getElementById('GameBoard').insertAdjacentHTML('beforeend', '<br>');
        }
        document.getElementById('GameBoard').insertAdjacentHTML('beforeend', '<button></button>');
    }
}


