function valores(lista) {

    let maior = lista[0];
    
    let menor = lista[0];

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }

    return {
        maior: maior,
        menor: menor
    };
}

let numeros = [25, 57, 19, 78, 50, 93, 15, 47, 28, 13];

let resultado = valores(numeros);

console.log(`O maior valor é: ${resultado.maior}`);

console.log(`O menor valor é: ${resultado.menor}`);