
const produtos = [
    { 
        id: 1, 
        nome: "Teclado Mecanico", 
        preco: 150.00, 
        categoria: "Eletrônicos", 
        tags: ["periféricos", "gamer", "usb"] 
    },
    { 
        id: 2, 
        nome: "Mouse Gamer", 
        preco: 80.00, 
        categoria: "Eletronicos", 
        tags: ["perifericos", "escritorio"] 
    },
    { 
        id: 3, 
        nome: "Caderno Espiral", 
        preco: 25.00, 
        categoria: "Papelaria", 
        tags: ["estudos", "escola"] 
    }
];

console.log("--- Produtos da Categoria Eletronicos ---");
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].categoria === "Eletrônicos") {
        console.log(produtos[i].nome);
    }
}


console.log("\n--- Produtos ate R$ 100 ---");
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].preco <= 100) {
        console.log(`${produtos[i].nome} - R$ ${produtos[i].preco}`);
    }
}


console.log("\n--- Tags do Primeiro Produto ---");
const produtoEspecifico = produtos[0];
for (let j = 0; j < produtoEspecifico.tags.length; j++) {
    console.log(produtoEspecifico.tags[j]);
}


let somaPrecos = 0;
for (let i = 0; i < produtos.length; i++) {
    somaPrecos += produtos[i].preco;
}
let precoMedio = somaPrecos / produtos.length;
console.log(`\nPreço médio dos produtos: R$ ${precoMedio.toFixed(2)}`);