/* Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980 */

const nome = 'Luiz Otávio';
const segundoNome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imcCalculo;
let nascimento;

Calculomassa = peso / (altura * altura);
nascimento = 2024 - idade;

console.log(`${nome} ${segundoNome} tem ${idade} anos, pesa ${peso} kg `);
console.log(`tem ${altura} de altura e seu IMC é de ${Calculomassa}`);
console.log(`${nome} nasceu em ${nascimento}.`);

