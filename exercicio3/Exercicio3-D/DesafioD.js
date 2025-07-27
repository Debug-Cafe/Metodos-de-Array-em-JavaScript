//Projeto 4 --> Exercício 3 - Desafio D
// Combine filter e map para obter apenas os nomes dos estudantes com média > 85

const estudantes = [
    {id: 1, nome: "Jeremias", notas: [80, 70, 60]},
    {id: 2, nome: "Calissa", notas: [90, 85, 95]},
    {id: 3, nome: "Eris", notas: [50, 60, 55]},
    {id: 4, nome: "Cleyton", notas: [70, 75, 80]}
];

const nomesEstudantesAprovados = estudantes
    .filter(estudante => {
        const soma = estudante.notas.reduce((a, b) => a + b, 0);
        const media = soma / estudante.notas.length;
        return media > 85;
    })
    .map(estudante => estudante.nome);

console.log("🎓 Estudantes com média > 85:" + " 🏅");
console.table(nomesEstudantesAprovados);