// switch/case

/*estrutura:
let diaSemana;
switch (diaSemana) {
  case 0: diaSemana = 'domingo'
  break; OU -return- caso esteja dentro de uma function
  case 1: diaSemana = 'segunda'
  case .............
} */

function getDiaDaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = "domingo"
            return diaSemanaTexto
        case 1:
            diaSemanaTexto = "segunda"
            return diaSemanaTexto
        case 2:
            diaSemanaTexto = "terça"
            return diaSemanaTexto
        case 3:
            diaSemanaTexto = "quarta"
            return diaSemanaTexto
        case 4:
            diaSemanaTexto = "quinta"
            return diaSemanaTexto
        case 5:
            diaSemanaTexto = "sexta"
            return diaSemanaTexto
        case 6:
            diaSemanaTexto = "sabado"
            return diaSemanaTexto

    }

}

const data = new Date('2003-10-20 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaDaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);