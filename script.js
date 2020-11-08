const actualPlayerSpan = document.querySelector('#actualPlayer');
const winnerPlayerSpan = document.querySelector('#winner');

let actualPlayer = 'o';

actualPlayerSpan.innerText = actualPlayer;

let board = [
    ['e','e','e'], 
    ['e','e','e'], 
    ['e','e','e']
];

function restart() {
    const restartDiv = document.querySelectorAll('.block');
    restartDiv.forEach(element => {
        element.innerText = '';
        element.classList.remove('O', 'X');
    });

    board = [
        ['e','e','e'],
        ['e','e','e'],
        ['e','e','e']
    ];

    winnerPlayerSpan.innerText = '';
}

    
function nowinner() {
    const nowinner = document.querySelectorAll('.block');
    let end = true;

    nowinner.forEach(element => {
        if (element.innerText === '') {
            end = false;
        }
    });

    if (end) {
        restart();
    }
}


function check(row, column, element) {
    if (board[row][column] !== 'e') {
        return;
    }

    if (board[row][column] === 'e') {
        board[row][column] = actualPlayer;
        element.innerText = actualPlayer.toUpperCase();
    }

    if (actualPlayer === 'o') {
        element.classList.add('O');
        actualPlayer = 'x';
    } else if (actualPlayer === 'x') {
        element.classList.add('X');
        actualPlayer = 'o';
    }   
    
    actualPlayerSpan.innerText = actualPlayer;
    
    checkForWinner();
    nowinner();
}

function checkForWinner() {

    // row 0 check x
    if (board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x')
     {
        winnerPlayerSpan.innerText = 'X';
        restart();
    }
    // row 0 check o
    else if (board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o')
     {
        winnerPlayerSpan.innerText = 'O';
        restart();
    }
    // row 1 check x
    else if (board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x')
     {
        winnerPlayerSpan.innerText = 'X';
        restart();
    }
    // row 1 check o
    else if (board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o')
     {
        winnerPlayerSpan.innerText = 'O';
        restart();
    }
    // row 2 check x
    else if (board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x')
     {
        winnerPlayerSpan.innerText = 'X';
        restart();
    }
    // row 2 check o
    else if (board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o')
     {
        winnerPlayerSpan.innerText = 'O';
        restart();
    }
    // diagonaly 0,0 check x
    else if (board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x')
     {
        winnerPlayerSpan.innerText = 'X';
        restart();
    }
    // diagonaly 0,0 check o
    else if (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o')
     {
        winnerPlayerSpan.innerText = 'O';
        restart();
    }
    // diagonaly 0,2 check x
    else if (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x')
     {
        winnerPlayerSpan.innerText = 'X';
        restart();
    }
    // diagonaly 0,2 check o
    else if (board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o')
     {
        winnerPlayerSpan.innerText = 'O';
        restart();
    }
    // row 0 check x
    else if (board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x')
     {
        winnerPlayerSpan.innerText = 'X';
        restart();
    }
    // row 0 check o
    else if (board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o')
     {
        winnerPlayerSpan.innerText = 'O';
        restart();
    }
    // row 1 check x
    else if (board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x')
     {
        winnerPlayerSpan.innerText = 'X';
        restart();
    }
    // row 1 check o
    else if (board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o')
     {
        winnerPlayerSpan.innerText = 'O';
        restart();
    }
    // row 2 check x
    else if (board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x')
     {
        winnerPlayerSpan.innerText = 'X';
        restart();
    }
    // row 2 check o
    else if (board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o')
     {
        winnerPlayerSpan.innerText = 'O';
        restart();
    }
};