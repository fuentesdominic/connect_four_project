const playerRed = 'red';
const playerYellow = 'yellow';

let currentPlayer = playerRed;
const gameBoard = document.querySelector('.gameboard')


function gamestart() {
    for(let i = 0; i < gameBoard.children.length; i++) {
        gameBoard.children[i].addEventListener('click', () => {
         if(currentPlayer === 'red') {
              gameBoard.children[i].style.backgroundColor = 'red';
                currentPlayer = playerYellow
         } else if (currentPlayer === 'yellow') {
            gameBoard.children[i].style.backgroundColor = 'yellow';
                currentPlayer = playerRed
       }

       })
    
    }

}
gamestart()

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
