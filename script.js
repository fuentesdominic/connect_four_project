const playerRed = 'red';
const playerYellow = 'yellow';

let currentPlayer = playerRed;
const gameBoard = document.querySelector('.gameboard')

const selectTile = (e) => {
    const turnNumber = parseInt(e.target.id)
    const bottomTile = parseInt(e.target.id) + 7
if (e.target.id >= 35) {
   console.log(e.target.id)
} else if (circlces[bottomTile].classList) {

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
[14,21,28,35]

// diagonal
]


// loop through div, .removeAttribute -- for game restart 