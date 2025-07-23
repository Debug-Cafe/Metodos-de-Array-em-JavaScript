/*
Exercício 1: Relembrando Funções, Spread e Rest

1. Função tradicional
2. Arrow function
3. Função com rest parameters
4. Usando spread operator com arrays
5. Usando spread com objetos

Desafio para os alunos:
a. Crie uma função que recebe um objeto person e retorna um novo objeto com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)
b. Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array combinado com todos os elementos (use rest e spread)
*/

// Função tradicional
function sum(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Função com rest parameters
function calculateAverage(...numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}

// Usando spread operator com arrays
const fruits = ["maçã", "banana", "laranja"];
const moreFruits = ["uva", "kiwi"];
const allFruits = [...fruits, ...moreFruits];

// Usando spread com objetos
const person = { name: "Maria", age: 25 };
const employee = { ...person, id: 1001, department: "Engenharia" };

// Desafio a: Função que adiciona isAdult
function addIsAdult(person) {
  return { ...person, isAdult: person.age >= 18 };
}

// Desafio b: Função que combina múltiplos arrays
function combineArrays(...arrays) {
  return [].concat(...arrays);
}
