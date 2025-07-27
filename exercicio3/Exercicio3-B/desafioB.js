//Projeto 4 --> Exercício 3 - Desafio B
// Use find para encontrar o estudante com id = 3

const estudantes = [
    {id: 1, nome: "Jeremias"},
    {id: 2, nome: "Calissa"},
    {id: 3, nome: "Eris"},
    {id: 4, nome: "Cleyton"}
];

const estudanteEncontrado = estudantes.find(estudante => estudante.id === 3);

console.log("🔍 Estudante encontrado: ", estudanteEncontrado);
console.table(estudanteEncontrado);