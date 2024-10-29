const numeros = [3, 7, 6, 8]; 

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i] ** 3;
}

console.log(`A soma dos cubos é: ${soma}`);