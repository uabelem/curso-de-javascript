class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    getFala() {
        console.log(`${this.nome} fez algum barulho!`);
    }
}

class Dog extends Animal {
    constructor(nome) {
        super(nome);
    }

    getFala(){
        console.log(`${this.nome} latiu!`);
    }
}

const animal = new Animal("Lua");
const dog = new Dog("Estrela");
animal.getFala(); // sempre usando a const
dog.getFala();