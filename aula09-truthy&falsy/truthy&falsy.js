const x = ''; // FALSE
console.log(!!x)

const y = 0; // FALSE
console.log(!!y)

const z = null; // FALSE
console.log(!!z)

const w = undefined; // FALSE
console.log(!!w)

const list = [] // TRUE
console.log(!!list)

const object = {} // TRUE
console.log(!!object)

// !! verifica o valor booleno. PORÉM

console.log(!x) // TRUE
console.log(!list) // FALSE

// ! inverte o valor do booleano.