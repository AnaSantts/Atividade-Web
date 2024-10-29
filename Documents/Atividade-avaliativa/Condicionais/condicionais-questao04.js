let alunos = [
    ["Aluno1", [10, 50, 100]],
    ["Aluno2", [55, 78, 90]],
    ["Aluno3", [75, 60, 90]],
    ["Aluno4", [20, 50, 70]],
    ["Aluno5", [98, 85, 70]]
];

for (let i = 0; i < alunos.length; i++) {
    let nome = alunos[i][0]; 
    
    let notas = alunos[i][1]; 
    
    let soma = 0;
    
    for (let j = 0; j < notas.length; j++) {
        soma += notas[j];
    }

    let media = soma / notas.length;

    let resultado = " ";
    if (media > 70) {
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado";
    }
}

console.log(`${nome}, média ${media}, ${resultado}.`);