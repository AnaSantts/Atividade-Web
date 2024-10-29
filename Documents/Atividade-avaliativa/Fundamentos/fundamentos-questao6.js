let numeros = [5, 3, 9, 3, 2, 6, 8, 3, 5, 8, 2];

const valor = [];  
const contagem = []; 

for (let i = 0; i < numeros.length; i++) {

    let index = valor.indexOf(numeros[i]);

    index >= 0 ? contagem[index]++ : (valor.push(numeros[i]), contagem.push(1));
}

let ocorrencias = contagem[0];
let maisFrequente = valor[0];

for (let j = 1; j < contagem.length; j++) {
    ocorrencias = contagem[j] > ocorrencias ? contagem[j] : ocorrencias;
    maisFrequente = contagem[j] === ocorrencias ? valor[j] : maisFrequente;
}

console.log(`O número com maior quantidade de ocorrência é ${maisFrequente}, com ${ocorrencias} ocorrências.`);