/* 
    Aula sobre break e continue

        break - Sai do laço
        continue - continua para próxima interação

*/


// Continue
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i of numeros) {

    if (i === 3) {
        continue;
    }
    console.log(i);
}

console.log(' ');

// Break
const valores = [1, 2, 3, 4, 5, 6, 7, 8];

for (let num of valores) {

    if (num === 7) {
        break;
    }
    console.log(num);
}