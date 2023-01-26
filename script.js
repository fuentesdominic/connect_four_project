// Variables 
const playerRed = 'red';
const playerYellow = 'yellow';

let currentPlayer = playerRed;
let gameRunning = true;
const gameBoard = document.querySelector('.gameboard')
console.log('#replayButton')
const yellowMoves = []
const redMoves = []

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