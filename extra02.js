
const obj1 = { tema: "escuro", idioma: "pt-br" };
const obj2 = { idioma: "en", notificacoes: true };


const mesclado = { ...obj1 };


const chavesObj2 = Object.keys(obj2);


for (let i = 0; i < chavesObj2.length; i++) {
    const chave = chavesObj2[i];
    mesclado[chave] = obj2[chave];
}

console.log("\n--- Lista 2: Mesclar Objetos ---");
console.log(mesclado);