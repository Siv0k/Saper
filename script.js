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

    let totalMines = GetCountMina(gameBoard.length);
    let mines = MinaPosition(totalMines, gameBoard.length);
    console.log(MinaPosition(totalMines, gameBoard.length));
    for (let i = 0; i < gameBoard.length; i++) {
        const elem = {
            button: document.createElement('button'),
            mina_korovya: mines.includes(i),
        }
        if (i % boardSizeWidht == 0) {
            document.getElementById('GameBoard').insertAdjacentHTML('beforeend', '<br>');
        } 
        gameBoard[i] = elem;
        document.getElementById('GameBoard').append(gameBoard[i].button);
        gameBoard[i].button.classList.add(gameBoard[i].mina_korovya ? 'mina' : 'no-mina');
    }
}

function GetCountMina(length) {
    if (length >= 25 && length < 36) {
        return 4;
    } 
    else if (length >= 36 && length < 49) {
        return 6;
    }
    else if (length >= 49 && length < 64) {
        return 9;
    }
    else if (length >= 64 && length < 81) {
        return 10;
    }
    else if (length >= 81 && length < 100) {
        return 12;
    }
    else if (length >= 100 && length < 121) {
        return 16;
    }
}

function MinaPosition(totalMines, length) {
    let mines = [];
    mines.length = 0;
    while (mines.length < totalMines) {
        let position = Math.floor(Math.random() * length);
        if (!mines.includes(position)) {
            mines.push(position);
        }
    }
    return mines;
}



document.getElementById('Sumbit').addEventListener('click', GetBoardSize);