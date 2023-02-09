let num = document.getElementById('inum')
let tab = document.getElementById('inumlist')
let res = document.querySelector('div#res')
let valores = []

// Verifica se o número está no intervalo definido
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Verifica se o número já está na lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function addnum() {
    // Verifica se as duas condições são verdadeiras  
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        
        

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}