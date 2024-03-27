/* 
    Função: trecho de código que só é chamado/invocado

        Função Void (vazia)
        Função com parâmetro (s)
        Função Return
        Função Arrow / Arrow Function
*/

function soma (num1, num2) {
    somaDosNumero =  num1 + num2

    return somaDosNumero
};

const numGerado = soma(2,5);

// console.log(numGerado);


// Arrow function
const multi = (n1, n2) => n1 * n2

const multiplicacao = multi(5,5);

console.log(multiplicacao);

