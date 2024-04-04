const paragrafos = document.querySelector('.paragrafos')
const partes = document.querySelectorAll('p')

const bodyStyle = getComputedStyle(document.body);
const bodyColor = bodyStyle.backgroundColor

for (let ps of partes) {
    ps.style.backgroundColor = bodyColor;
    ps.style.color = '#fff'

}