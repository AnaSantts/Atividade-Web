let somaPar = 0;

let somaImpar = 0;

for (let i = 0; i <= 99; i++) {
    if (i % 2 === 0) {
        somaPar += i; 
    } else {
        somaImpar += i;
    }
}

console.log(`A soma de todos os números pares é: ${somaPar}`);

console.log(`A soma de todos os números ímpares é: ${somaImpar}`);