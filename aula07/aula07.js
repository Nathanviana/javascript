/*
prompt - Um tipo de caixa de texto, podendo ser ultilizado para realizar uma pergunta.
alert - Mensagem de tela, sendo um aviso ou mostrar resultado
confirm - mensagem com perguntar para confirmar algo

*/


alert('Bem vindo');
let num1 = prompt('Digite qualquer numero');
let num2 = prompt('Digite outro numero');
num1 = Number(num1);
num2 = Number(num2);
let somaDosNumeros = num1+num2;
alert(`O resultado da soma dos valores é: ${somaDosNumeros}`); // OBS: Não necessáriamente precisa ser digitado dessa forma o alert.

/* 
Podendo tambem ser dessa forma: 
 alert(`O resultado da soma dos valores é: ${num1 + num2}`); 
Dessa forma removendo a linha de codigo 14 sendo mais direto.
*/

