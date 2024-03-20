// (condição) ? "se for verdadeiro" : "se for falso"

const nivelUsuario = 1000
const statusUsuario = nivelUsuario >= 1000 ? "bom de bala" : "noobzin";

const corUsuario = "azul";
const corPadrao = corUsuario || "branco";

console.log(`player ${statusUsuario} ${corPadrao}`);