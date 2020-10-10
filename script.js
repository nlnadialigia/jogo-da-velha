const squares = document.querySelectorAll('.square')
const players = document.querySelector('.player')
const playerSelected = document.getElementById('player-selected')
const winnerSelected = document.getElementById('winner-selected')
const modal = document.querySelector('.modal')
const button = document.getElementById('button')

let player = null

changePlayer('X')

for(let square of squares){
    square.addEventListener('click', ()=>{
        const id = square.id
        console.log(id);
        const choice = document.getElementById(id)

        if (choice.innerHTML !== '-') {
            return
        }
        
        choice.innerHTML = player
        choice.style.color = '#7d0633'

        if (player === 'X') {
            player = 'O'
        }else{
            player = 'X'
        }

        checkWinner()
    })
}

function changePlayer(value) {
    player = value
    playerSelected.innerHTML = player
}

function checkWinner() {
    const square1 = document.getElementById(1) 
    const square2 = document.getElementById(2)
    const square3 = document.getElementById(3)
    const square4 = document.getElementById(4)
    const square5 = document.getElementById(5)
    const square6 = document.getElementById(6)
    const square7 = document.getElementById(7)
    const square8 = document.getElementById(8)
    const square9 = document.getElementById(9)

    if (checkSequence(square1, square2, square3)) {
        changeSquareColor(square1, square2, square3)
        changeWinner(square1)
        gameOver()
        return
    }

    if (checkSequence(square1, square4, square7)) {
        changeSquareColor(square1, square4, square7)
        changeWinner(square1)
        gameOver()
        return
    }

    if (checkSequence(square1, square5, square9)) {
        changeSquareColor(square1, square5, square9)
        changeWinner(square1)
        gameOver()
        return
    }

    if (checkSequence(square2, square5, square8)) {
        changeSquareColor(square2, square5, square8)
        changeWinner(square2)
        gameOver()
        return
    }

    if (checkSequence(square3, square6, square9)) {
        changeSquareColor(square3, square6, square9)
        changeWinner(square3)
        gameOver()
        return
    }

    if (checkSequence(square3, square5, square7)) {
        changeSquareColor(square3, square5, square7)
        changeWinner(square3)
        gameOver()
        return
    }

    if (checkSequence(square4, square5, square6)) {
        changeSquareColor(square4, square5, square6)
        changeWinner(square4)
        gameOver()
        return
    }

    if (checkSequence(square7, square8, square9)) {
        changeSquareColor(square7, square8, square9)
        changeWinner(square7)
        gameOver()
    }

}

function checkSequence(squareA, squareB, squareC) {
    let equal = false
    if (squareA.innerHTML !== '-' && squareA.innerHTML === squareB.innerHTML && squareB.innerHTML === squareC.innerHTML) {
        equal = true
    }

    return equal
}

function changeSquareColor(squareA, squareB, squareC) {
    squareA.style.backgroundColor = '#79d70f'
    squareB.style.backgroundColor = '#79d70f'
    squareC.style.backgroundColor = '#79d70f'
}

function changeWinner(square) {
    winner = square.innerHTML
    winnerSelected.innerHTML = winner
}

function gameOver() {
    setTimeout(() => {
        for(let square of squares){
            square.style.display = 'none'
            players.style.display = 'none'
            modal.style.display = 'flex'
        }
    }, 1500);
}

function restart() {
    winner = null
    winnerSelected.innerHTML=''

    for (let i = 1; i <= 9; i++) {
        const square = document.getElementById(i)    
        square.style.backgroundColor = '#f2a07b'
        square.style.color = '#f2a07b'
        square.innerHTML = '-'
        square.style.display = 'inline-block'
    }

    players.style.display = 'block'
    modal.style.display = 'none'

    changePlayer('X')

}