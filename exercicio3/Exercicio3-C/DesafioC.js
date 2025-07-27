//Projeto 4 --> Exercício 3 - Desafio C
// Use filtro para encontrar estudantes que tiraram pelo menos uma nota abaixo de 70

const estudantes = [
    {id: 1, nome: "Jeremias", notas: [80, 70, 60]},
    {id: 2, nome: "Calissa", notas: [90, 85, 95]},
    {id: 3, nome: "Eris", notas: [50, 60, 55]},
    {id: 4, nome: "Cleyton", notas: [70, 75, 80]}
];

const estudantesComNotaBaixa = estudantes.filter(estudante => {
    return estudante.notas.some(nota => nota < 70);
});

console.log("📉 Estudantes com pelo menos uma nota abaixo de 70:");
console.table(estudantesComNotaBaixa);