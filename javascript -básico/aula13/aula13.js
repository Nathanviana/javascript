// Aula de Funções

function saudacao (nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao ('Luiz');
console.log(variavel);


/* foram determinados valores padrões para x e y caso não recebam nem um valor do usuário. */
function soma (x = 1, y = 1) {
const resultado = x + y; // const criada para receber o resultado da adição.
return resultado;
}

const resultado = soma (4, 2);
console.log(resultado);

// modo padrão com uma variavel const
const raiz = function(n) {
return n ** 0.5;
}
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//arrow fuction
const raiz2 = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

