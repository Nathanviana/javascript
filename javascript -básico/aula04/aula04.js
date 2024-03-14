/* Introdução à Constantes:
  constantes tem QUASE as mesmas regras de let, como exemplo o case-sensitive, camelCase, nomes significativos, PORÉM não há como atribuir trocar de valor para o mesmo nameOfV(nome do valor que vem depois do const) como fazemos na let.

  Multiplicação de valores= *
  Divisão de valores= /
  Adição= +
  Subtração= -
*/
const primeiroNumber = 5;
const segundoNumber = 10;
const resultado = segundoNumber / primeiroNumber;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
//  na let, é possível manipular os valores de constantes envolvendo-os com constantes. EX:
resultadoTriplicado = resultadoTriplicado - 2; 
console.log(resultadoTriplicado);

// é possível ver o tipo do valor, se é string ou number, utilizando o código typeof dentro dos () no console.log EX:
console.log(typeof primeiroNumber);
// algo muito importante a ser notado é que se posto entre aspas, um número torna-se uma String no identificador typeof, EX:
const terceiroNumber = '15'; // <-- String devido por conta das aspas.
console.log(typeof terceiroNumber);