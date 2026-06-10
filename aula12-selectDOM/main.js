// Selecionar apenas um elemento
// const addUserText = document.getElementById('add-user'); Apenas Id
const addUserText = document.querySelector('#add-user'); // + MODERNO e RECOMENDADO (Id/Class)

console.log(addUserText)

// Selecionar múltiplos elementos
//const allItems = document.getElementsByTagName("li") // (tag -> HTML COllection)
// const allItems = document.getElementsByClassName("item"); (class -> HTML COllection)
const allItems = document.querySelectorAll(".items .item"); // + MODERNO e RECOMENDADO (id/class -> Nodelist)

console.log(allItems)