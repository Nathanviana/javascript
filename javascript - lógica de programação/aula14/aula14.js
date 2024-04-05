// Aula de while e do while

// Função para gerar um número aleatorio
function random(min, max) {
    const numRandom = Math.random() * (max - min) + min;
    return Math.floor(numRandom);
}

const min = 1;
const max = 20;
let rand = random(min, max);

while (rand !== 10) { // lê a condição primeiro, se for falso, break
    rand = random(min, max); 
    //console.log(rand);
}

const min2 = 1
const max2 = 20
let rand2 = random(min,max);

do { // execulta primeiro e depois lê a condição
    rand = random(min, max);
    console.log(rand);
}while (rand !== 10);