let num1 = 0.7; // number
let num2 = 0.1; // number
let num3 = 10.5789348048 // number

num1 += num2 // num1 = num1 + num2;
num1 = parseFloat(num1.toFixed(2)); /* apenas toFixed nao resolveria o problema
pois poderia monstra que o numero nao vai entregar um numero inteiro, por isso
foi preciso acrescentar o parseFloat para tranformar a operação em um number
obs: pode ser ultilizado tb o "Number" ao invez de parseFloat. */

console.log(num1.toString() + num2); /* o comando toString esta transformando o
num1 em uma string */
/* "num1 = num1.toString();" Agora esta linha esta alterando o 
num1 permanentemente */
console.log(num1.toString(2)); //representação binaria do numero
console.log(num3.toFixed(2)); // O numero será arredondado
console.log(Number.isInteger(num1)); /* isInteger vai informar se o numero é
inteiro ou não com a resposta true ou false */
let temp = num1 * "ola";
console.log(Number.isNaN(temp)); /* aqui o codigo esta fazendo uma pergunta
se esta conta é uma conta invalida. */ 

