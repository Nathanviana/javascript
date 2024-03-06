/* AULA SOBRE STRINGS
Todas as strings são indexadas e tem índicies que são basicamente os valores unidades ou casas de cada caractere da string EX:
             0123456789
let teste = "olá mundo!"
sempre começando pelo índice ZERO 
*/

/* Formas de ver qual é o elemento que está em um determinado índice:
1° usando [x]
2° .charAt(x)
SEMPRE buscando dentro do range(alcance ou quantidade de índices presentes na string)
*/
let umaString = "olá mundo";

console.log(umaString[6], "caracter do índice 6"); // no índice 6 se encontra a letra (n)

/* Forma de saber em qual índice começa uma palavra:     (indexOf)
console.log(umaString.indexOf('mundo'))
e tem uma forma de falar por onde começar a caçar a palavra:
console.log(umaString.indexOf('mundo', 4)) irá começar do índice 4

OUTRA forma de saber de trás para frente é
console.log(umaString.lastIndexOf())
*/
console.log(umaString.indexOf('mundo'), "índice onde a palavra 'mundo' começa") // em qual índice começa 'mundo'
console.log(umaString.indexOf('mundo', 2), "onde começa 'mundo' ") // ordenar por onde começar a caçar a palavra por índices
console.log(umaString.lastIndexOf('á', 4,), 'a letra á de olá se encontra no índice 2') // saber onde se encontra um caractere de trás para frente na contagem de índices

/* Forma de encontrar letras minúsculas ou unidades de caracteres numa string:    (MATCH)
console.log(umaString.match(/[a-z]/g)) para ver todas as letras minúsculas por ex
MAS no caso acima seria necessário um conhecimento mais vasto sobre EXPRESSÕES REGULARES, a flag (g) serve para dizer que é na string inteira e não apenas no primeiro elemento que seja uma letra minuscula por exemplo.
*/
console.log(umaString.match(/[a-z]/g), "comando para identificar todas as letras minúsculas sem acento")

// Como substituir coisas na string, um exemplo:   (REPLACE) 
console.log(umaString.replace('olá', 'Bem vindo ao'),'- neste caso "olá" foi substituido através do replace') 
console.log(umaString.replace(/[a-z]/g, '0'), "- expressão regular para substituir por 0") // Utilizando expressão regular no replace para mudar todas as letras minúsculas por 0.

// Como ver o tamanho de uma string:     (LENGTH)
console.log(umaString.length, "- número de índices presentes na string utilizando 'length'");

// Como selecionar um trecho específico (SLICE):
console.log(umaString.slice(4,9), "- utilização do 'slice' para 'fatiar' uma string");

// Separar (SPLIT): há a opção de selecionar a quantidade de elementos colocando split(' ', 3)
let outraString = "Olá mundo e seja bem vindo!"
console.log(outraString.split(' '), "- utilização do split para separar todas as palavras que antecedem um espaço por exemplo.");
console.log(outraString.split(' ', 3), "- limitando o split a uma certa quantidade de elementos da string.");


// TextTransfom no JS:
console.log(outraString.toLocaleUpperCase()) // tudo maiúsculo
console.log(outraString.toLowerCase()) // tudo minúsculo