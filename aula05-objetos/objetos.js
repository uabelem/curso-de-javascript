const pessoa = {
    nome: "Gabriel",
    sobrenome: "Belém",
    idade: 16,
    hobies: ["programar", "tocar guitarra", "estudar", "jogar basquete"],
    animal: {
        nome: "Lua",
        idade: 3,
    }
}

// const nome = pessoa.nome;
// const sobrenome = pessoa.sobrenome;
// const idade = pessoa.idade;
// const hobies = pessoa.hobies;

const { nome, sobrenome, idade, hobies: passaTempo, animal: { idade: animalIdade } } = pessoa // Faz o mesmo que as 4 linhas de cima
//  transformando cada propiedade do objeto "pessoa" direto em uma váriavel
// Também sendo possível modificar os nomes

const hobieFavorito = pessoa.hobies[0]

console.log(`Olá me chamo ${nome} ${sobrenome}`) // Acessando por uma váriavel "${nome}"
console.log(`Tenho ${idade} anos`)
console.log(`Meu hobbie favorito é ${hobieFavorito}`)
console.log(`Mas também amo ${passaTempo[3]}`)

// pessoa.animal = "lua"

console.log(`e tenho uma cadelinha de ${animalIdade} anos chamada ${pessoa.animal.nome}`) // Acessando por um valor de uma propiedade de um objeto "${pessoa.animal.nome}"