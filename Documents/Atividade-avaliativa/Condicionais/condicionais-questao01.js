let num1 = 18; 

let num2 = 27;

console.log(`Número 1: ${num1}`);

console.log(`Número 2: ${num2}`);

if (num1 % 2 !== 0) {
    console.log(`${num1} é maior que ${num2}.`);
} else if (num2 % 2 !== 0) {
    console.log(`${num2} é maior que ${num1}.`);
} else if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}.`);
} else if (num2 > num1) {
    console.log(`${num2} é maior que ${num1}.`);
} else {
    console.log(`Os números são iguais: ${num1}.`);
}