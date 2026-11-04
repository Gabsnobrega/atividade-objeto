
const original = { nome: "Joao", idade: 25, cidade: "SP" };

const chaves = ["nome", "idade", "cidade"];


const copia = {};


for (let i = 0; i < chaves.length; i++) {
    const chave = chaves[i];
    copia[chave] = original[chave];
}

console.log("--- Lista 1: Copia Manual ---");
console.log(copia);