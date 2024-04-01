const elementos = [
    { tag: 'p', texto: 'Frase 01' },
    { tag: 'div', texto: 'Frase 02' },
    { tag: 'footer', texto: 'Frase 03' },
    { tag: 'section', texto: 'Frase 04' }
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    const criaTag = document.createElement(tag);
    const criaTxt = document.createTextNode(texto); // pode ser usado tb taCriada.innerText = texto;

    criaTag.appendChild(criaTxt);
    div.appendChild(criaTag);
}

container.appendChild(div);