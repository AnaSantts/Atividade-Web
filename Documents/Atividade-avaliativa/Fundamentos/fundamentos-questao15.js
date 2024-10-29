let numeros = [7, 3, 4, 6, 1, 8];

for (let i = 0; i < numeros.length; i++) {
    let menorIndex = i;

    for (let j = i + 1; j < numeros.length; j++) {
        menorIndex = numeros[j] < numeros[menorIndex] ? j : menorIndex;
    }

    const temp = numeros[i];
    numeros[i] = numeros[menorIndex]; 
    numeros[menorIndex] = temp;
}

console.log(numeros);