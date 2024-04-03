// For of - estrutura de repetição

// For Clássico -> Geralmete com interáveis (array ou string)
// For in -> Retorna o índice ou chave (string, array ou objetos)
// For of -> Retorna valor em si (interáveis, arrays ou strings)

const nome = ['Nathan', 'Noser', 'Lufe', 'Dival'];

// for (let valor of nome) {
//     console.log(valor)
// };

// for (let valor in nome) {
//     console.log(nome[valor])
// };

nome.forEach(function(el, indice, array) {
    console.log(el, indice,array);
})