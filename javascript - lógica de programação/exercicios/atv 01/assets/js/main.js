
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('altura invalida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `O seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'peso normal', 'Sobrepreso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    //não precisa do else em "else if" pois aonde for encontrado a condição verdadeira a função ira parar  
    if (imc >= 39.9) {
        return nivel[5];
    }

    if (imc >= 34.9) {
        return nivel[4];
    }

    if (imc >= 29.9) {
        return nivel[3];
    }

    if (imc >= 24.9) {
        return nivel[2];
    }

    if (imc >= 18.5) {
        return nivel[1];
    }

    if (imc < 18.5) {
        return nivel[0];
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultadoimc');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p)
}


