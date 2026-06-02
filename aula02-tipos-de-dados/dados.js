// Variaveis : LET , CONST

const firstName = 'Gabriel' // CONST não pode ser alterada
const lastName = 'Lima' 
let minhaIdade = 16 // LET pode ser alterada

// TIPOS DE DADOS

// STRINGS

const names = 'Belém,Vinyx,Anjos'
console.log('Meu nome é ' + firstName + ' ' + lastName)
console.log(`Meu nome é ${firstName} ${lastName}, e tenho ${minhaIdade} anos`)
console.log(`Meu nome é ${firstName.toLocaleUpperCase()} ${lastName.toLocaleUpperCase()}`) // Deixa tudo maiusculo
console.log(`Meu nome é ${firstName.toLocaleLowerCase()} ${lastName.toLocaleLowerCase()}`) // Deixa tudo minusculo
console.log(names.split(',')) // Lista simples separada na virgúla

// NUMBER 

const number = 5 // numeros são escritos tem aspas
console.log(number)
console.log(number.toString()) // podemos tranformar um number em string
console.log(typeof number.toString())

// BOOLEANOS

false
true
console.log(2 == 3) // resulta em false
console.log(5 == 5) // resulta em true

// null & undefined

const x = null // Para variaveis vazias
let y = undefined // Para variaveis que ainda não tem valor