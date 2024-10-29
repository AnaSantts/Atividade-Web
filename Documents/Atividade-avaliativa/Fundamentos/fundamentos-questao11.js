let numeros = [10, 58, 68, 88, 25, 45];

let n = 3;

let ultimosNumeros = [];

for (let i = 0; i < n; i++) {
    ultimosNumeros[i] = numeros[numeros.length - n + i];
}

console.log(ultimosNumeros);