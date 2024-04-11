function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw error('Deu error');
    }

    return x + y
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    //console.log(error) // mostrar o error completo
    console.log('Alguma coisa mais amigavel')
}