
let livros = [
    { id: 1, titulo: "O Senhor dos Aneis", autor: "J.R.R. Tolkien", ano: 1954, disponivel: true },
    { id: 2, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, disponivel: true },
    { id: 3, titulo: "1984", autor: "George Orwell", ano: 1949, disponivel: false }
];


console.log("--- Livros Disponiveis ---");
for (let i = 0; i < livros.length; i++) {
    if (livros[i].disponivel === true) {
        console.log(`${livros[i].titulo} - ${livros[i].autor}`);
    }
}


let idParaEmprestar = 1;
for (let i = 0; i < livros.length; i++) {
    if (livros[i].id === idParaEmprestar) {
        livros[i].disponivel = false;
        console.log(`\nLivro "${livros[i].titulo}" emprestado com sucesso!`);
    }
}


console.log("\n--- Livros Emprestados ---");
for (let i = 0; i < livros.length; i++) {
    if (livros[i].disponivel === false) {
        console.log(`${livros[i].titulo} - ${livros[i].autor}`);
    }
}