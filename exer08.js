
const alunos = [
    { nome: "Carlos", notas: [8, 7, 9], turma: "A" },
    { nome: "Mariana", notas: [5, 6, 6], turma: "B" },
    { nome: "Lucas", notas: [9, 10, 9.5], turma: "A" },
    { nome: "Beatriz", notas: [6, 7, 6.5], turma: "B" }
];


console.log("--- Status dos Alunos ---");
const alunosAprovados = [];

for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i];
    
    
    let somaNotas = 0;
    for (let j = 0; j < aluno.notas.length; j++) {
        somaNotas += aluno.notas[j];
    }
    
    
    let media = somaNotas / aluno.notas.length;
    console.log(`${aluno.nome} - Media: ${media.toFixed(1)}`);
    
    
    if (media >= 7) {
        alunosAprovados.push(aluno.nome);
    }
}


console.log("\n--- Alunos Aprovados ---");
console.log(alunosAprovados);


let melhorAluno = "";
let maiorMedia = -1;

for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i];
    let somaNotas = 0;
    for (let j = 0; j < aluno.notas.length; j++) {
        somaNotas += aluno.notas[j];
    }
    let media = somaNotas / aluno.notas.length;
    
    if (media > maiorMedia) {
        maiorMedia = media;
        melhorAluno = aluno.nome;
    }
}

console.log(`\nAluno com a maior media: ${melhorAluno} (${maiorMedia.toFixed(1)})`);