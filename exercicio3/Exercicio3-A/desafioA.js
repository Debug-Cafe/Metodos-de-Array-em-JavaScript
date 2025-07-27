//Projeto 4 --> Exercício 3 - Desafio A
// Use filtro para encontrar estudantes inativos

const estudantes = [
    {nome: "Jeremias", estudanteStatus: {ativos: true}},
    {nome: "Calissa", estudanteStatus: {ativos: false}},
    {nome: "Eris", estudanteStatus: {ativos: true}},
    {nome: "Cleyton", estudanteStatus: {ativos: false}}
];

const estudantesInativos = estudantes.filter(estudante => !estudante.estudanteStatus.ativos);
console.log("🔍🚫📋 - Estudantes inativos encontrados: " + estudantesInativos.length);
console.table(estudantesInativos);