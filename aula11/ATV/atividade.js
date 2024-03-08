let numero = prompt('digite seu numero aqui')
numero = parseFloat(numero)
  
document.body.innerHTML += `Seu numero é: ${numero}<br />`;
  document.body.innerHTML += `Raiz quadrada: ${numero ** 0.5} <br />`;
  document.body.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)} <br />`;
  document.body.innerHTML += `É NaN: ${Number.isNaN(numero)} <br />`;
  document.body.innerHTML += `Arredondado para baixo: ${Math.floor(numero)} <br />`;
  document.body.innerHTML += `Arredondado para cima: ${Math.ceil(numero)} <br />`;
  document.body.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)} <br />`;
 
  
