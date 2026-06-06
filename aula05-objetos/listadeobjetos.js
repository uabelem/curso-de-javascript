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

const [
    {
        id: id0,
        descrição: desc0,
        feito: feito0,
    },
    {
        id: id1,
        descrição: desc1,
        feito: feito1,
    },
    {
        id: id2,
        descrição: desc2,
        feito: feito2,
    },
] = afazeres

console.log(feito2)

if (feito0 && feito1 && feito2 === true){
    console.log("Parabéns! Não fez nada mais que o mínimo")
}else{
    console.log("Que decepção... Eu esperava mais de você")
}