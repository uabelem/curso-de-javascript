// While significa "enquanto"

let index = 0;

while ( index < 10 ){
    console.log("Index é menor que 10")
    // index = index + 1;
    // index += 1
    index++//Mesma coisa que os dois acima
}

// For in para propiedades em lista

const pessoa = {
    nome: "Belém",
    idade: 16
}

for ( propiedades in pessoa){
    console.log(pessoa[propiedades])
}