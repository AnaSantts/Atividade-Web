let nomeCompleto = "Alan Mathison Turing";

const p = nomeCompleto.split(" ");

let resultado = " ";

for (let i = 0; i < p.length; i++) {
    resultado += (i < p.length - 1) 
        ? p[i][0] + ". " 
        : p[i];
}

console.log(resultado);