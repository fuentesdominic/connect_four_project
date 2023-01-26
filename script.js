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
                gameRunning = false
                return player  
              } else if (gameBoard.children[i]?.classList.contains(player) &&
              gameBoard.children[i + 7]?.classList.contains(player) &&
              gameBoard.children[i + 14]?.classList.contains(player) &&
              gameBoard.children[i + 21]?.classList.contains(player)){ 
                gameRunning = false 
                return player
              } else if (gameBoard.children[i]?.classList.contains(player) &&
              gameBoard.children[i + 8]?.classList.contains(player) &&
              gameBoard.children[i + 16]?.classList.contains(player) &&
              gameBoard.children[i + 24]?.classList.contains(player)) { 
                gameRunning = false 
                return player
              } else if (gameBoard.children[i]?.classList.contains(player) &&
              gameBoard.children[i + 6]?.classList.contains(player) &&
              gameBoard.children[i + 12]?.classList.contains(player) &&
              gameBoard.children[i + 18]?.classList.contains(player)) {
                gameRunning = false
                return player 
              }
        }
    }
   
// Forces circles to fill up the bottom of the board(Work In Progress)
// const selectTile = (e) => {
//     if (e.target.classList.length === 1) {
//         if(currentPlayer === 'playerRed') {
//         e.target.classList.add('playerRed')
//         currentPlayer = 'playerYellow'
//     } else if (currentPlayer === 'playerYellow') {
//         e.target.classList.add('playerYellow')
//          currentPlayer = 'playerRed'
//     } 
//     }    
// } 

// const selcetCircle = (e) => {
// const selectTile = parseInt(e.target.id)
// const bottomTile = parseInt(e.target.id) + 7
//     if (selectTile >= 35 || gameBoard[bottomTile].classList.length > 1) {
//         placeCircle(e)
//     }
// }

// Function for Game Logic
function gamestart() {
    for(let i = 0; i < gameBoard.children.length; i++) {
        const currentCircle = gameBoard.children[i]
        currentCircle.addEventListener('click', () => {
        if (gameRunning) {
        if(currentCircle.classList.length < 2) {
               if(currentPlayer === 'red') {
                    currentCircle.classList.add('playerRed')
                    if (!updateTitle(checkBoard('playerRed'))) { 
                    turn.innerHTML = `Player Yellow's Turn`  
                    currentPlayer = playerYellow
                    }
               } else if (currentPlayer === 'yellow') {
                   currentCircle.classList.add('playerYellow')
                   if (!updateTitle(checkBoard('playerYellow'))) {  
                     turn.innerHTML = `Player Red's Turn`
                     currentPlayer = playerRed
                   }
                }
                } 
            } 
        })
    }
}

// Function that displays player turn and winner
function updateTitle(player) {
    if (player === 'playerRed') {
      winner.innerHTML = `Player Red Wins!`
      return true
    } else if (player === 'playerYellow') {
    winner.innerHTML = `Player Yellow Wins!`
    return true
}
return false
}
gamestart()

// Game Reset Function 
const replayButton = () => {
    document.location.reload()
}