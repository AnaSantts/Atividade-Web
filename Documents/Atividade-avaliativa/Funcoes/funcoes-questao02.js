function contador(frase) {

    let contVogais = 0;

    let contConsoantes = 0;
    
    const vogais = "aeiouAEIOU";

    for (let i = 0; i < frase.length; i++) {
        
        let c = frase[i];

        if (/[a-zA-Z]/.test(c)) {

            if (vogais.includes(c)) {
                contVogais++;
            } else { 
                contConsoantes++;
            }
        }
    }

    return {
        vogais: contVogais,
        consoantes: contConsoantes
    };
}

let frase = "Às vezes, o caminho certo não é o mais fácil";

let resultado = contador(frase);

console.log(`A quantidade de vogais é: ${resultado.vogais}`);

console.log(`A quantidade de consoantes é: ${resultado.consoantes}`);