let tik = true
let vez
let jogando = true
let tabuleiro = ['', '', '', '', '', '', '', '', ''];

document.addEventListener('DOMContentLoaded', () => {
    const jogo = document.getElementById('jogo')
    vez = document.getElementById('vez')
    for (let i = 0; i < 9; i++) {
        const campo = document.createElement('button')
        campo.classList.add('campo')
        campo.addEventListener("click", () => jogada(i))
        campo.setAttribute('title', 'Clique para jogar')
        jogo.appendChild(campo)
    }
})

function jogada(index) {
    const button = document.getElementsByClassName("campo")[index]
    if (button.textContent == "" && jogando == true) {
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

function limpar(select) {
    try {
        tik = true
        jogando = true
        vez.textContent = 'X'
        vez.style.color = 'red'
        const array = document.querySelectorAll(select)
            for (let i = 0; i < tabuleiro.length; i++) {
                tabuleiro[i] = ''
            }
        array.forEach(el => {
            (!isNaN(el.textContent) && el.textContent != '') ? el.textContent = '0' : el.textContent = ''

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
            jogando = false
            const vencedor = document.getElementById(tabuleiro[a].toLowerCase())
            vencedor.textContent++
        }
    }
}


