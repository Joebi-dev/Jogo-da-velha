let tik = true

function jogada(index) {
    const button = document.getElementsByClassName("campo")[index]
    
    if (button.textContent == "") {
        console.log(index)
        button.textContent = tik ? 'X' : 'O'
        button.style.color = tik ? 'red' : 'blue'
        
        tik = !tik
    }


}
