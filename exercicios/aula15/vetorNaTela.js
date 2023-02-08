// Para escrever separadamente os elementos de uma array é interessante o uso de comandos de repetição com contador em relação à posição.

let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}
console.log('----------------------------------------------')

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
} //let contador e in nome da variável array

console.log(`A posição do valor 8 é ${valores.indexOf(8)}`)

// posição -1 é porque não pertence ao array.