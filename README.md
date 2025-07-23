# Aula Prática: Métodos de Array em JavaScript

## Objetivos de Aprendizagem

...
## Exercício 1: Funções, Spread e Rest

```javascript
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
```

---

## Exercício 2: forEach e map

```javascript
const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  // ...
];

// a. Lista formatada de produtos
products.forEach((product, i) => {
  console.log(`${i + 1}. ${product.name} - R$${product.price}`);
});

// b. Array de strings "Nome - Categoria"
const formattedNames = products.map(p => `${p.name} - ${p.category}`);

// c. Preços com impostos (15% a mais)
const pricesWithTax = products.map(p => p.price * 1.15);

// d. Valor total dos produtos
let total = 0;
products.forEach(p => total += p.price);
```

---

## Exercício 3: filter e find

```javascript
const students = [
  { id: 1, name: "João", age: 20, grades: [85, 90, 78], active: true },
  // ...
];

// a. Estudantes inativos
const inactiveStudents = students.filter(s => !s.active);

// b. Estudante com id = 3
const studentId3 = students.find(s => s.id === 3);

// c. Estudantes com nota abaixo de 70
const studentsWithLowGrade = students.filter(s => s.grades.some(g => g < 70));

// d. Nomes dos estudantes com média > 85
const topStudentsNames = students
  .filter(s => s.grades.reduce((a, b) => a + b, 0) / s.grades.length > 85)
  .map(s => s.name);
```

---

## Exercício 4: findIndex, some e every

```javascript
const tasks = [
  { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
  // ...
];

// a. Índice da primeira tarefa incompleta
const firstIncompleteIndex = tasks.findIndex(t => !t.completed);

// b. Alguma tarefa de baixa prioridade completa?
const hasCompletedLowPriority = tasks.some(t => t.priority === "baixa" && t.completed);

// c. Todas as tarefas de alta prioridade estão incompletas?
const allHighPriorityIncomplete = tasks
  .filter(t => t.priority === "alta")
  .every(t => !t.completed);

// d. Índice da tarefa com id = 10
const indexId10 = tasks.findIndex(t => t.id === 10);
// Retorna -1 se não existe
```

---

## Exercício 5: Desafio Integrador - E-commerce

```javascript
const inventory = [
  { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
  // ...
];

// a. Lista formatada de produtos
inventory.forEach(p => console.log(`${p.name} - R$${p.price} (${p.stock} em estoque)`));

// b. Produtos em estoque
const inStock = inventory.filter(p => p.stock > 0);

// c. Eletrônicos com preço < 1000
const cheapElectronics = inventory.filter(p => p.category === "Eletrônicos" && p.price < 1000);

// d. Algum produto sem estoque?
const hasNoStock = inventory.some(p => p.stock === 0);

// e. Todos têm pelo menos uma avaliação?
const allHaveReviews = inventory.every(p => p.reviews.length > 0);

// f. Índice da "Cafeteira"
const cafeteiraIndex = inventory.findIndex(p => p.name === "Cafeteira");

// g. Primeiro produto da categoria "Vestuário"
const firstClothing = inventory.find(p => p.category === "Vestuário");

// h. Função de busca por nome
function searchProducts(term) {
  return inventory.filter(p => p.name.toLowerCase().includes(term.toLowerCase()));
}

// i. Adicionar média de avaliações
const inventoryWithAverage = inventory.map(p => ({
  ...p,
  averageRating: p.reviews.reduce((a, b) => a + b, 0) / p.reviews.length
}));

// j. Produto com maior média de avaliações
const bestProduct = inventoryWithAverage.reduce((best, p) =>
  p.averageRating > best.averageRating ? p : best, inventoryWithAverage[0]);
console.log(`Produto com melhor avaliação: ${bestProduct.name} (${bestProduct.averageRating.toFixed(2)})`);
```

---

