const squares = document.querySelectorAll('.square')

let player = null

for(let square of squares){
    square.addEventListener('click', ()=>{
        const id = square.id
        console.log(id);
        const choice = document.getElementById('id')
        choice.innerHTML = player
        choice.style.color = '#7d0633'
    })
}

function changePlayer(value) {
    player
}
