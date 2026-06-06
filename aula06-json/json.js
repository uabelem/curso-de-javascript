const afazeres = [
    {
        id: 1,
        descrição: "estudar programação",
        feito: true,
    },
    {
        id: 2,
        descrição: "ler",
        feito: false,
    },
    {
        id: 3,
        descrição: "treinar",
        feito: true,
    },
];

const afazeresJSON = JSON.stringify(afazeres) // Transformando Lista em JSON
console.log(afazeresJSON)

const afazeresList = JSON.parse(afazeresJSON) // Transformando JSON em Lista
console.log(afazeresList)