class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade
    }

    getNomeCompleto() {
        console.log(`${this.nome} ${this.sobrenome}`);
    }


    static getFala() { // STATIC não acessa nenhuma da informaçôes do objeto
        console.log("Hello World!")
    }
}

const pessoa = new Pessoa("Gabriel", "Belém", 16);
console.log(pessoa);
pessoa.getNomeCompleto();
Pessoa.getFala();
