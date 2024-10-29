function encontra(frase) {
    
    let palavras = frase.split(" ");
    
    let maiorPalavra = palavras[0];

    for (let i = 1; i < palavras.length; i++) {
        if (palavras[i].length > maiorPalavra.length) {
            maiorPalavra = palavras[i];
        }
    }

    return maiorPalavra;
}

let frase = "Às vezes, o caminho certo não é o mais fácil";

let maiorPalavra = encontra(frase);

console.log(`A maior palavra encontrada é: ${maiorPalavra}`);