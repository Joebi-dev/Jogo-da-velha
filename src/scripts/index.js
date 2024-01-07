let tik = true
let vitorias = []
let vez

document.addEventListener('DOMContentLoaded', () => {
    console.log('carreguei o documents')
    const jogo = document.getElementById('jogo')
    vez = document.getElementById('vez')
    vez.textContent = 'X'
    for (let i = 0; i < 9; i++) {
        const campo = document.createElement('button')
        campo.classList.add('campo')
        campo.addEventListener("click", () => jogada(i))
        campo.setAttribute('title','Clique para jogar')
        jogo.appendChild(campo)
    }


})

function jogada(index) {
    const button = document.getElementsByClassName("campo")[index]
    if (button.textContent == "") {
        if (tik) {
            vez.textContent = 'O'
            vez.style.color = 'blue'
            button.textContent = 'X'
            button.style.color = 'red'
        } else {
            vez.textContent = 'X'
            vez.style.color = 'red'
            button.textContent = 'O'
            button.style.color = 'blue'
        }
        tik = !tik
    }
} 
