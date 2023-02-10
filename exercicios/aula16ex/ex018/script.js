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
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        tab.appendChild(item)
        res.innerHTML = '' // Limpa o resultado caso sejam adicionados mais números.   
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // Depois de adicionar zera input
    num.focus() // Depois de adicionar volta o cursor para o input
}

function calcular() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.`

    }
}