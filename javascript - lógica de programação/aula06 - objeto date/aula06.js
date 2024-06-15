// Objeto date:

//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix 
//const data = new Date(2019, 3); // a,m,d,h,M,s,ms

const data = new Date();
const dataBr = dataGeral(data);

function leftzero(num) {
  return num >= 10 ? num : `0${num}`;
}

function dataGeral(data) {
  const dia = leftzero(data.getDate());
  const mes = leftzero(data.getMonth() + 1);
  const ano = (data.getFullYear());

  return `Brazil date - ${dia}/${mes}/${ano}`
}

console.log(dataBr)