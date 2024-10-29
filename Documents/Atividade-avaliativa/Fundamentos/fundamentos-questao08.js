let frase = "Às vezes, o caminho certo não é o mais fácil.";

let fraseInvertida = "";

for (let i = frase.length - 1; i >= 0; i--) {
    fraseInvertida += frase[i];
}

console.log(fraseInvertida);
