// MAP ------------------------

const numbers = [1, 2, 3, 4, 5];

const numbersEmDobro = numbers.map(function(number){ 
    return number * 2 // Multiplica os números da lista por 2 
});

console.log(numbersEmDobro);

// FILTER ---------------------

const idades = [15, 16, 17, 18, 19, 20]

const idadesPar = idades.filter(function (idade) {
    return idade % 2 === 0; // Filtra deixando apenas os item pares
});

console.log(idadesPar)

// REDUCE ---------------------

const idadesSomadas = idades.reduce(function(idade, acumulação) { 
    return acumulação + idade // Soma todas as idades á acumulação
}, 0) // Valor da acumulação

console.log(idadesSomadas) 