const nome = prompt('Digite seu nome completo:'); //Nathan de Oliveira Viana
let numLetras;                                    //0123456789012345678901234
let segLetra
numLetras = nome;
segLetra = nome;



  document.body.innerHTML += `Seu nome é: ${nome}<br />`;
  document.body.innerHTML += `Seu nome tem ${numLetras.length} letras <br />`;
  document.body.innerHTML += `A segunda letra do seu nome é: ${segLetra.charAt(1)} <br />`;
  document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${nome.indexOf('a', 1)} <br />`;
  document.body.innerHTML += `Qual o último índice da letra a no seu nome?   ${nome.indexOf('a', 22)} <br />`;
  document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} <br />`;
  document.body.innerHTML += `As palavras do seu nome são: ${nome.split(" ")} <br />`;
  document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toLocaleUpperCase()} <br />`;
  document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br />`;

  