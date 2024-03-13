/* Objetos:
Esqueleto básico 
var NomeDoObjeto = {
  x1, 
  x2, 
  x3
};
EXEMPLO:
*/

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

// Função que cria objetos (FACTORY):
function criarUser(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
const pessoaN = criarUser("Pedro", "Silva", 18);
console.log(pessoaN.nome);

// Forma contraída da FACTORY:
function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Pedro', 'Henrique', 18);
const pessoa2 = criaPessoa('Dival', 'Lucas', 19);
const pessoa3 = criaPessoa('Noser', 'Feliz', 19);
const pessoa4 = criaPessoa('Rodrigo', 'Pardal', 20);
const pessoa5 = criaPessoa('slim', 'shadi', 30);
const pessoa6 = criaPessoa('Maria', 'Emanuelle', 8);

console.log(pessoa1.nome, pessoa2.sobrenome, pessoa5.idade); 


// Incrementação de Funções em objetos:
const pessoa7 = {
    nome: "Nathan Viana",
    chavepix: '03914823275',

    fala() {
        console.log(`A chave pix do ${ this.nome } é ${ this.chavepix }.`);
    },
  }
pessoa7.fala();