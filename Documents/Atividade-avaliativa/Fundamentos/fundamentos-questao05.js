let num1 = 55; 
let num2 = 80; 
let num3 = 65; 

const mensagem = 
    (num1 >= 50 && num1 <= 99) && (num2 >= 50 && num2 <= 99) && (num3 >= 50 && num3 <= 99)
    ? "Sucesso!"
    : "Erro! Um dos números não está dentro do intervalo de 50 a 99.";

console.log(mensagem);
