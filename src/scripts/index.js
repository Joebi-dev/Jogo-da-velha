let tik = true
let vitorias = []
let vez
let tabuleiro = ['', '', '', '', '', '', '', '', ''];


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
            vez.style.color = 'blue'
            vez.textContent = 'O'
            button.textContent = 'X'
            button.style.color = 'red'
        } else {
            vez.style.color = 'red'
            vez.textContent = 'X'
            button.textContent = 'O'
            button.style.color = 'blue'
        }
        
        tik = !tik
        tabuleiro[index] = (button.textContent)
        verificarVencedor()
    }
} 

function limpar(seletor) {
    try {
        const array = document.querySelectorAll(seletor)
        tik = true
        vez.textContent = 'X'
        vez.style.color = 'red'
        array.forEach(el => {
            if (el.textContent != '') {
                el.textContent = ''
            }
        });
    } catch (error) {
        console.log(error)
    }
}

function verificarVencedor() {
    const linhasVencedoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let linha of linhasVencedoras) {
        const [a, b, c] = linha;
        if (tabuleiro[a] !== '' && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
            console.log(tabuleiro[a])// Retorna 'X' ou 'O' (o jogador vencedor)
        }
    }

    // return null; // Retorna null se não houver vencedor
}


