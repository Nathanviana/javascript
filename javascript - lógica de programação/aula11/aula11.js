// For - Clássico - estrutura de repetição

//Estrutura classica de repetição
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

//Estrutura pulando de 10 em 10
for (let a = 0; a <= 100; a += 10) {
    console.log(a);
}

//Estrutura de repetição retorando
for (let b = 10; b >= 0; b--) {
    console.log(b);
}

//Estrutura para dizer se o número é par ou impar
for (let c = 0; c <= 10; c++) {
    const par = c % 2 === 0 ? 'par' : 'impar';
    console.log(c, par);
}

//Exemplo uso de repetição junto de array
const frutas = ['maçã', 'banana', 'uva', 'melancia'];

for (let f = 0; f < frutas.length; f++) {
    console.log(`Índice ${f}`, frutas[f]);    
}