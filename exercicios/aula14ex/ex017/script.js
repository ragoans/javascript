function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
        tab.innerHTML = ''
        let item = document.createElement('option')
        item.text = 'Digite um número acima'
        tab.appendChild(item)
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //Serve para limpar o select antes de adicionar mais valores
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //importante para outras linguagens como PHP, atribui value para os itens da tabuada criados
            tab.appendChild(item)
            c++
        }        
    }
    
}