function meuEscopo () {
    const form = document.querySelector('.form');

// Forma 01 de prevenir uma ação   
//   form.onsubmit = function (evento) {
//        evento.prevenDefault();
//        alert(1);
//        console.log(`Foi enviado`);
//    };


// Forma 02 de prevenir uma ação
let contador = 1;
function recebeEventoForm (evento) {
    evento.preventDefault();
    console.log(`Form não foi enviado ${contador}`);
    contador++;
}


form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();