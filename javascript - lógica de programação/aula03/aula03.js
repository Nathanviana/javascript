/* 
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY
*false
0
'',"",``
null / undefined
NaN 
*/

//&&
function falarOi () {
    return 'oi';
}

let vaiExecutar = 'Nathan';


// ||
const corUsuario = null;
const corPadrao = corUsuario || "preto";

console.log(corPadrao);