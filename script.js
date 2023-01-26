// Variables 
const playerRed = 'red';
const playerYellow = 'yellow';

let currentPlayer = playerRed;
let gameRunning = true;
const gameBoard = document.querySelector('.gameboard')
console.log('#replayButton')
const yellowMoves = []
const redMoves = []

// const winningNumbers = [
//     // horizontal 
//     [0,1,2,3],
//     [1,2,3,4],
//     [2,3,4,5],
//     [3,4,5,6],
//     [7,8,9,10],
//     [8,9,10,11],
//     [9,10,11,12],
//     [10,11,12,13],
//     [14,15,16,17],
//     [15,16,17,18],
//     [16,17,18,19],
//     [17,18,19,20],
//     [21,22,23,24],
//     [22,23,24,25],
//     [23,24,25,26],
//     [24,25,26,27],
//     [28,29,30,31],
//     [29,30,31,32],
//     [30,31,32,33],
//     [31,32,33,34],
//     [35,36,37,38],
//     [36,37,38,39],
//     [37,38,39,40],
//     [38,39,40,41],
//     // vertical 
//     [0,7,14,21],
//     [7,14,21,28],
//     [14,21,28,35],
//     [1,8,15,22],
//     [8,15,22,29],
//     [15,22,29,36],
//     [2,9,16,23],
//     [9,16,23,30],
//     [16,23,30,37],
//     [3,10,17,24],
//     [10,17,24,31],
//     [17,24,31,38],
//     [4,11,18,25],
//     [11,18,25,32],
//     [18,25,32,39],
//     [5,12,19,26],
//     [12,19,26,33],
//     [19,26,33,40],
//     [6,13,20,27],
//     [13,20,27,34],
//     [20,27,34,41],
//     // diagonal
//     [0,8,16,24],
//     [8,16,24,32],
//     [16,24,32,40],
//     [1,9,17,25],
//     [9,17,25,33],
//     [17,25,33,41],
//     [2,10,18,26],
//     [10,18,26,34],
//     [3,11,19,27],
//     [3,9,15,21],
//     [4,10,16,22],
//     [10,16,22,28],
//     [5,11,17,23],
//     [11,17,23,29],
//     [17,23,29,35],
//     [6,12,18,24],
//     [12,18,24,30],
//     [18,24,30,36],
//     [13,19,25,31],
//     [19,25,31,37],
//     [20,26,32,38],
//     ]
    
// Function checks who won, displays name of winner, and stops anymore circles from being placed once winner is displayed.
    function checkBoard(player) {
        for(let i = 0; i < 42; i++) {
            if (gameBoard.children[i]?.classList.contains(player) &&
            gameBoard.children[i + 1]?.classList.contains(player) &&
            gameBoard.children[i + 2]?.classList.contains(player) &&
            gameBoard.children[i + 3]?.classList.contains(player)){
                winner.innerHTML = `${player} Wins!`
                gameRunning = false  
              } else if (gameBoard.children[i]?.classList.contains(player) &&
              gameBoard.children[i + 7]?.classList.contains(player) &&
              gameBoard.children[i + 14]?.classList.contains(player) &&
              gameBoard.children[i + 21]?.classList.contains(player)){
                console.log(player) 
                winner.innerHTML = `${player} Wins!`
                gameRunning = false 
              } else if (gameBoard.children[i]?.classList.contains(player) &&
              gameBoard.children[i + 8]?.classList.contains(player) &&
              gameBoard.children[i + 16]?.classList.contains(player) &&
              gameBoard.children[i + 24]?.classList.contains(player)) {
                console.log(player) 
                winner.innerHTML = `${player} Wins!`
                gameRunning = false 
              } else if (gameBoard.children[i]?.classList.contains(player) &&
              gameBoard.children[i + 6]?.classList.contains(player) &&
              gameBoard.children[i + 12]?.classList.contains(player) &&
              gameBoard.children[i + 18]?.classList.contains(player)) {
                console.log(player) 
                winner.innerHTML = `${player} Wins!`
                gameRunning = false 
              }
        }
    }
   
// Forces circles to be placed at the bottom of the board
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

// Game Reset Function 
const replayButton = () => {
    document.location.reload()
    console.log(document.location.reload())
}

document.querySelector('#replayButton').addEventListener('click,', replayButton);



// Function for Game Logic
function gamestart() {
    for(let i = 0; i < gameBoard.children.length; i++) {
        const currentCircle = gameBoard.children[i]
        currentCircle.addEventListener('click', () => {
        if (gameRunning) {
        if(currentCircle.classList.length < 2) {
               if(currentPlayer === 'red') {
                currentCircle.classList.add('playerRed')
                checkBoard('playerRed') 
                turn.innerHTML = 'Player Yellow Turn'  
                currentPlayer = playerYellow
               } else if (currentPlayer === 'yellow') {
                   currentCircle.classList.add('playerYellow')
                   checkBoard('playerYellow')
                   turn.innerHTML = 'Player Red Turn'
                   currentPlayer = playerRed
                }
                } 
            } 
        })
    }
}
gamestart()



// function 
// const replayButton = gameBoard.children 
// replayButton.addEventListener('click', () => {
//     for(let i = 0; i < gameBoard.children.length; i++) {
//         if(checkBoard) {
//             i=-1; continue;
//         }
//     }
// })

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