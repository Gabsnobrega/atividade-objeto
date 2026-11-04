
let carrinho = [
    { produto: "Mouse", quantidade: 2, precoUnitario: 50.00 },
    { produto: "Teclado", quantidade: 1, precoUnitario: 120.00 },
    { produto: "Mousepad", quantidade: 3, precoUnitario: 25.00 }
];


console.log("--- Itens no Carrinho ---");
for (let i = 0; i < carrinho.length; i++) {
    console.log(`${carrinho[i].produto} - ${carrinho[i].quantidade}`);
}


let subtotal = 0;
for (let i = 0; i < carrinho.length; i++) {
    subtotal += carrinho[i].quantidade * carrinho[i].precoUnitario;
}
console.log(`\nSubtotal: R$ ${subtotal.toFixed(2)}`);


let totalFinal = subtotal;
if (subtotal > 100) {
    let desconto = subtotal * 0.10;
    totalFinal = subtotal - desconto;
    console.log(`Desconto aplicado de 10%: R$ ${desconto.toFixed(2)}`);
}
console.log(`Total Final: R$ ${totalFinal.toFixed(2)}`);


carrinho.splice(1, 1);


console.log("\n--- Carrinho Atualizado (apos remoçao) ---");
console.log(carrinho);