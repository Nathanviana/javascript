//  try, catch, finally

// try {
//     // E executado quando não ha erros 
// } catch (e) {
//     // é executada quando ha erros 
// } finally {
//     // sempre
// }


function mostraHoras(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-2000 12:58:12');
    const hora = mostraHoras();
    console.log(hora);
} catch (e) {
    // tratar error
    // console.log(e);
} finally {
    console.log('Tenha um bom dia');
}