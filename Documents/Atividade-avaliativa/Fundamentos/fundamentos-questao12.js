let lista = ["verde", "amarelo", "laranja", "roxo", "vermelho"];

let resultado = " ";

for (let i = 0; i < lista.length; i++) {
    resultado += lista[i];
    resultado += "#" * (i < lista.length - 1);
}

console.log(resultado);