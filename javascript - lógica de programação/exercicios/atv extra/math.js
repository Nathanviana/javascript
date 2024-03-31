/* 
    Math -> Matématica 
        - pow(2,2) / potência / 2² = 4
        - sqrt(25,2) / raiz]
        - ceil / arredondar para cima
        - floor / arredondar para baixo
        - random() / número aleatório entre 0 e 1
*/

// pow
const pot = Math.pow(2, 2);
console.log(pot);

// sqrt
const raiz = Math.sqrt(25, 2);
console.log(raiz);

// ceil
console.log(Math.ceil(43.07));

// floor
console.log(Math.floor(43.07));

// random
const randomNum = Math.random() * 100
//console.log(randomNum);


// random com floor
const randomNum2 = Math.floor(Math.random() * 100)
console.log(randomNum2);

// random com minimo e maximo determinado
const randomNum3 = Math.random() * (max - min) + min;

// extra
console.log(Number.isInteger(2024));