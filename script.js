// let table = document.createElement('table');
// for (i = 0; i < 9; i++) {
//     let tr = document.createElement('tr');
//     table.appendChild(tr);
//     for (j = 0; j < 9; j++) {
//     let td = document.createElement('td');
//     let button = document.createElement('button');
//     button.textContent = '';
//     td.appendChild(button);
//     tr.appendChild(td);
//     }
// }
// document.body.appendChild(table);

// function Lkm() {
// let button = document.querySelectorAll('button');
// for (i = 0; i < button.length; i++) {
//     button[i].addEventListener('click', function() {
//         this.textContent = 'X';
//     });
// }
// }

// function Pkm() {
//     let button = document.querySelectorAll('button');
//     for (i = 0; i < button.length; i++) {
//         button[i].addEventListener('contextmenu', function() {
//             this.textContent = 'O';
//         });
// }
// }

// function PlaceMines(BoardSize, Mines) {
// let button = document.querySelectorAll('button');
// }

// Lkm();
// Pkm();

let gameBoard = [];
gameBoard.length = 81;

for (let i = 0; i < gameBoard.length; i++) {
    GameBoard.insertAdjacentHTML('beforeend', '<button></button>');
}