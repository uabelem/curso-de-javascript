// Function Básica

function soma1(a, b) {
    return a + b
};
console.log(soma1(2, 10));

// Um valor, dois parámetros?

function soma2(c, d = 10) {
    return c + d
};
console.log(soma2(2));

// Arrow Function

const somaArrow = (e, f = 10) => {
    return e + f
};
const valorSomaArrow = somaArrow(2);
console.log(valorSomaArrow)

// Arrow Function simplificada 

const somaArrowS = (g, h = 10) => g + h;
const valorSomaArrowS = somaArrowS(2);
console.log(valorSomaArrowS)