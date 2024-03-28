// Atribuição via desestruturação (objeto)

const pessoa = {
    nome: 'pedro', 
    sobrenome: 'dival', 
    idade: 'jeferson',
    endereco: {
        rua: 'existente III',
        bairro: 'jacobina 4'
    }
}

pessoa.idade = 18
const {nome,sobrenome, ...resto} = pessoa

console.log(nome,sobrenome, resto);