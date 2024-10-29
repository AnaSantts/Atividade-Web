function verifica(frase, palavra) {
    
    return frase.includes(palavra);
}

let frase =  "Às vezes, o caminho certo não é o mais fácil";

let palavra = "fácil";

let resultado = verifica(frase, palavra);

if (resultado) {
    console.log(`A palavra "${palavra}" está presente na frase.`);
} else {
    console.log(`A palavra "${palavra}" não está presente na frase.`);
}