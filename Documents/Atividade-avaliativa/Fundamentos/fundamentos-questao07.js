let frase = "Às vezes, o caminho certo não é o mais fácil.";

const palavras = frase.split(" ");

const nvFrase = [];

for (let i = 0; i < palavras.length; i++) {
    nvFrase.push(
        palavras[i].length < 5 
            ? palavras[i].toUpperCase() 
            : palavras[i].toLowerCase()
    );
}

const resultado = nvFrase.join(" ");

console.log(resultado);
