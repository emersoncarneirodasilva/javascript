/*
let num = [8, 4, 6, 7, 1]
console.log(num)
num[3] = 9                              // acrescenta um elemento na posição indicada (no caso do exercício posição 3)
num.push(2)                             // acrescenta um elemento na útima posição
num.length                              // mostra o tamanho do array (vetor)
num.sort()                              // organiza os elementos do array em ordem crescente

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro elemento do vetor é: ${num[0]}`)
*/

//--------------------------------------------------------------------------------------------------------------------------------------------

/*
let num = [8, 4, 6, 7, 1]
for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

//--------------------------------------------------------------------------------------------------------------------------------------------

let num = [8, 4, 6, 7, 1]                                                // Forma mais simplificada da expressão de cima
for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let n = 4                                    
let numIndex = num.indexOf(n)                                           // verifica a posição onde se encontra o elemento selecionado (no caso do exercício o valor n)
if (numIndex == -1) {
    console.log(`O valor não foi encontrado!`)
} else {            
    console.log(`O valor ${n} está na posição ${numIndex}`)
}