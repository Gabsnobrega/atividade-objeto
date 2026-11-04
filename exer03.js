
const produto = {
  nome: "Smartphone",
  preco: 1999.99,
  categoria: "Eletrônicos",
  estoque: 10
};


const temPreco = "preco" in produto;


const naoTemDesconto = !("dsconto" in produto);


console.log("A propriedade 'preco' existe?", temPreco);            
console.log("A propriedade 'dsconto' NÃO existe?", naoTemDesconto); 