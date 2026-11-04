cconst endereco = {
    rua: 'Direita',
    numero: 100,
    cidade: 'Sao Paulo'
};

const pessoa = {
    nome: 'Gabriel',
    idade: 28,
    endereco: endereco
};

console.log(`A pessoa mora na rua ${pessoa.endereco.rua}, número ${pessoa.endereco.numero}, cidade ${pessoa.endereco.cidade}.`);