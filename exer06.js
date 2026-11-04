
const tarefas = [
    { id: 1, descricao: "Estudar JavaScript", concluida: true, prioridade: "alta" },
    { id: 2, descricao: "Fazer os exercicios", concluida: false, prioridade: "alta" },
    { id: 3, descricao: "Limpar o quarto", concluida: false, prioridade: "baixa" },
    { id: 4, descricao: "Comprar pao", concluida: true, prioridade: "media" }
];


console.log("--- Tarefas Concluidas ---");
for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].concluida === true) {
        console.log(tarefas[i].descricao);
    }
}


console.log("\n--- Tarefas de Prioridade Alta ---");
for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].prioridade === "alta") {
        console.log(tarefas[i].descricao);
    }
}


let pendentes = 0;
for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].concluida === false) {
        pendentes++;
    }
}
console.log(`\nTotal de tarefas pendentes: ${pendentes}`);