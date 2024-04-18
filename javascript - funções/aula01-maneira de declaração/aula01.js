// Declaração de função (Function hoisting)
falarOi();
function falarOi() {
    console.log('oi')
}

// First-class objects (objetos de primeira classe)
// function expression
const souUmDado = function() {
    console.log('Sou um dado');
};
souUmDado()

// arrow function
const funcaoarrow = () => {
    console.log("Sou uma arrow function")
};
funcaoarrow();

// Dentro de um objeto 
const obj = {
    falar() {
        console.log('Estou falando...');
    }
}
obj.falar();