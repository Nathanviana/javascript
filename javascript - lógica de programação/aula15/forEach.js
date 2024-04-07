// forEach

/* 

    forEach(item, index, array)

        item - Dados/Informações contidas na poisição atual do array
        index - Número da posição. Sempre começando em 0.
        array - Retorna o array completo

*/

const users1 = [
    { nome: 'Nathan', idade: 20 },
    { nome: 'Lufe', idade: 18 },
    { nome: 'Dival', idade: 19 },
]

users1.forEach(function (item, index, array) {
    //console.log(item, index, array);
});


// Exemplo de como ser aplicado 
const users2 = [
    { nome: 'Nathan', idade: 20 },
    { nome: 'Lufe', idade: 18 },
    { nome: 'Dival', idade: 19 },
    { nome: 'Noser', idade: 16 },
]

users2.forEach(function(item, index) {
    if(item.idade < 18){
        console.log(`${item.nome}, posição ${index} é menor de idade.`);
    }
});