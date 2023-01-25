const playerRed = 'red';
const playerYellow = 'yellow';

let currentPlayer = playerRed;
const gameBoard = document.querySelector('.gameboard')
const yellowMoves = []
const redMoves = []
// check player moves to possible winning conbinations
// push into array 

const winningNumbers = [
    // horizontal 
    [0,1,2,3],
    [1,2,3,4],
    [2,3,4,5],
    [3,4,5,6],
    [7,8,9,10],
    [8,9,10,11],
    [9,10,11,12],
    [10,11,12,13],
    [14,15,16,17],
    [15,16,17,18],
    [16,17,18,19],
    [17,18,19,20],
    [21,22,23,24],
    [22,23,24,25],
    [23,24,25,26],
    [24,25,26,27],
    [28,29,30,31],
    [29,30,31,32],
    [30,31,32,33],
    [31,32,33,34],
    [35,36,37,38],
    [36,37,38,39],
    [37,38,39,40],
    [38,39,40,41],
    // vertical 
    [0,7,14,21],
    [7,14,21,28],
    [14,21,28,35],
    [1,8,15,22],
    [8,15,22,29],
    [15,22,29,36],
    [2,9,16,23],
    [9,16,23,30],
    [16,23,30,37],
    [3,10,17,24],
    [10,17,24,31],
    [17,24,31,38],
    [4,11,18,25],
    [11,18,25,32],
    [18,25,32,39],
    [5,12,19,26],
    [12,19,26,33],
    [19,26,33,40],
    [6,13,20,27],
    [13,20,27,34],
    [20,27,34,41],
    // diagonal
    [0,8,16,24],
    [8,16,24,32],
    [16,24,32,40],
    [1,9,17,25],
    [9,17,25,33],
    [17,25,33,41],
    [2,10,18,26],
    [10,18,26,34],
    [3,11,19,27],
    [3,9,15,21],
    [4,10,16,22],
    [10,16,22,28],
    [5,11,17,23],
    [11,17,23,29],
    [17,23,29,35],
    [6,12,18,24],
    [12,18,24,30],
    [18,24,30,36],
    [13,19,25,31],
    [19,25,31,37],
    [20,26,32,38],
    ]
    
    function checkBoard() {
        for(let i = 0; i < winningNumbers.length; i++) {
            const tileOne = gameBoard[winningNumbers[i][0]];
            console.log(tileOne);
            const tileTwo = gameBoard[winningNumbers[i][1]];
            const tileThree = gameBoard[winningNumbers[i][2]];
            const tileFour = gameBoard[winningNumbers[i][3]];
        }
    }
    //     } if (
    //         tileOne.classList.contains(playerRed) &&
    //         tileTwo.classList.contains(playerRed) &&
    //         tileThree.classList.contains(playerRed) &&
    //         tileFour.classList.contains(playerRed)
    //         )
    //         {
    //             window.alert('Player Red Wins!')
    //         }
    //     if ( 
    //         tileOne.classList.contains(playerYellow) &&
    //         tileTwo.classList.contains(playerYellow) &&
    //         tileThree.classList.contains(playerYellow) && 
    //         tileFour.classList.contains(playerYellow) 
    //         )
    //         {
    //             window.alert('Player Yellow Wins!')
    //         }
    // }
    // checkBoard()
   

const selectTile = (e) => {
    if (e.target.classList.length === 1) {
        if(currentPlayer === 'red') {
        currentCircle.classList.add('playerRed')
        currentPlayer = playerYellow
    } else if (currentPlayer === 'yellow') {
        currentCircle.classList.add('playerYellow')
         currentPlayer = playerRed
    } 
}
}


const selcetCircle = (e) => {
const selectTile = parseInt(e.target.id)
const bottomTile = parseInt(e.target.id) + 7
    if (e.target.id >= 35 || gameBoard[bottomTile].classList.length > 1) {
        placeCircle(e)
    }
}


function gamestart() {
    for(let i = 0; i < gameBoard.children.length; i++) {
        const currentCircle = gameBoard.children[i]
        currentCircle.addEventListener('click', () => {
         if(currentCircle.classList.length < 2) {
                if(currentPlayer === 'red') {
                 currentCircle.classList.add('playerRed')
                 currentPlayer = playerYellow
                } else if (currentPlayer === 'yellow') {
                    currentCircle.classList.add('playerYellow')
                    currentPlayer = playerRed
                } 
            } 

       })
   
    }
}
gamestart()
    

// if id is less than 7 it is ok
// else if position clicked id - 7 this is ok
// 


// loop through div, .removeAttribute -- for game restart 

// const selectTile = (e) => {
// const turnNumber = parseInt(e.target.id)
// const bottomTile = parseInt(e.target.id) + 7
// if (e.target.id >= 35) {
//     if(currentPlayer === 'red') {
//         currentCircle.classList.add('playerRed')
//         currentPlayer = playerYellow
//        } else if (currentPlayer === 'yellow') {
//            currentCircle.classList.add('playerYellow')
//            currentPlayer = playerRed
//         } 
// }
// } else {
//     if (circlces[bottomTile].classList.length > 1) {
//         if(currentPlayer === 'red') {
//             currentCircle.classList.add('playerRed')
//             currentPlayer = playerYellow
//            } else if (currentPlayer === 'yellow') {
//                currentCircle.classList.add('playerYellow')
//                currentPlayer = playerRed
//            } 
//         }
//     }