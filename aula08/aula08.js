let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let canso;

canso = varA
varA = varB
varB = varC
varC = canso

// [varA, varB, varC] = [varB, varC, varA] (Outra Opção)

console.log(varA, varB, varC);
