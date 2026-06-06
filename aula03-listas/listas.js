// -----  LISTAS ----- //


const nomes = ["a","b","c","d","e","f","g","h","i","j","k","l","m"]

console.log(nomes[6])  // g
console.log(nomes[1])  // b
console.log(nomes[11]) // l


// Manipulação de listas ---------------


nomes.push("n") // Adicionar um item ao final da lista
console.log(nomes[13])

nomes.unshift("ao") // Adicionar um item ao começo da lista
console.log(nomes[0])

nomes.pop() // Remove o último item da lista
console.log(nomes)


// Metodos de utilidade ----------------


console.log(nomes.indexOf("g")) // Mostra a posição de tal item na lista

nomes.sort() // Ordena a lista em ordem alfabética

console.log(nomes.length) // Mostra quantos itens tem na lista

console.log(Array.isArray(nomes)) // Verifica se tal varíavel é uma lista (true/false)