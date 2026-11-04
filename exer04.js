const configuracoes = {
    tema: 'escuro',
    idioma: 'pt- BR',
    notificacoes: 'true',
    autoSave: 'false',
    fonte:'16px'
};
const chaves = ["tema", "idioma", "notificacoes"];

for (let i = 0; i < chaves.length; i++) {
   const chave = chaves [i];
   const valor = configuracoes[chaves;]
   console.log(`${chave}: ${valor}`);
    
}