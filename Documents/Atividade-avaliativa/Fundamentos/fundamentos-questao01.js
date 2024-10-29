const agora = new Date();

const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const diaDaSemana = diasDaSemana[agora.getDay()];

let horas = agora.getHours().toString().padStart(2, '0'); 
let minutos = agora.getMinutes().toString().padStart(2, '0');
let segundos = agora.getSeconds().toString().padStart(2, '0');
const horaAtual = `${horas}:${minutos}:${segundos}`;

console.log(`Hoje é: ${diaDaSemana}.`);
console.log(`A hora atual é: ${horaAtual}.`);
