/*Primitivos (imutáveis) - string, number, boolean, undefined, null 
(bigint, symbol) - valores copiados

Referência (mutável) - array, object, function - passados por referência
*/

let a = "A";
let b = a; // cópia
console.log(a,b);

const c = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const d = c;

d.nome = 'João';
console.log(c);
console.log(d);

//{...a} pode transformar em copia uma referencia 