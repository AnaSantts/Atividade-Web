let frase = "Às vezes, o caminho certo não é o mais fácil.";

const palavras = frase.split(" ");

let soma = 0;

for (let i = 0; i < palavras.length; i++) {
    soma += palavras[i].length;
}

console.log(`A soma dos tamanhos das palavras é: ${soma}`);