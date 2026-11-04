
const usuario = {
    nome: "Gabriel",
    idade: 28,
    cidade: "Sao Paulo",
    profissao: "Desenvolvedor",
    ativo: true
};


const chavesParaContar = ["nome", "idade", "pais", "profissao", "telefone"];

let contador = 0;


for (let i = 0; i < chavesParaContar.length; i++) {
    const chave = chavesParaContar[i];
    
    
    if (chave in usuario) {
        contador++;
    }
}

console.log("\n--- Lista 3: Contar Propriedades Existentes ---");
console.log(`Número de propriedades encontradas no objeto: ${contador}`);