# 📚 Aula Prática: Métodos de Array em JavaScript

## 🎯 Objetivos de Aprendizagem
- Relembrar os conceitos de funções, spread e rest
- Utilizar corretamente os métodos de array: `map`, `filter`, `find`, `findIndex`, `forEach`, `every` e `some`
- Resolver problemas do mundo real usando métodos de array
- Combinar diferentes métodos para soluções mais elegantes

---

## 🧠 Exercício 1: Relembrando Funções, Spread e Rest

```js
// 1. Função tradicional
function sum(a, b) {
  return a + b;
}

// 2. Arrow function
const multiply = (a, b) => a * b;

// 3. Função com rest parameters
function calculateAverage(...numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// 4. Usando spread operator com arrays
const fruits = ["maçã", "banana", "laranja"];
const moreFruits = ["uva", "kiwi"];
const allFruits = [...fruits, ...moreFruits];

// 5. Usando spread com objetos
const person = { name: "Maria", age: 25 };
const employee = { ...person, id: 1001, department: "Engenharia" };
```

### ▶️ Testando
```js
console.log("Soma:", sum(5, 3));
console.log("Multiplicação:", multiply(5, 3));
console.log("Média de 3 números:", calculateAverage(4, 6, 8));
console.log("Frutas combinadas:", allFruits);
console.log("Objeto funcionário:", employee);
```

### 💡 Desafio:
- a. Crie uma função que recebe um objeto `person` e retorna um novo objeto com `isAdult: true` se `age >= 18`
- b. Crie uma função que aceita múltiplos arrays como parâmetros e retorna um único array com todos os elementos

---

## 🔄 Exercício 2: forEach e map

```js
const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
];
```

### ▶️ Exemplo de uso
```js
products.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name} - R$${product.price}`);
});

const productNames = products.map(product => product.name);

const discountedProducts = products.map(product => ({
  ...product,
  price: product.price * 0.9,
}));
```

### 💡 Desafio:
- a. `map` → `"Nome do produto - Categoria"`
- b. `map` → Preço com 15% de imposto
- c. `forEach` + acumulador → total geral

---

## 🔍 Exercício 3: filter e find

```js
const students = [
  { id: 1, name: "João", age: 20, grades: [85, 90, 78], active: true },
  { id: 2, name: "Maria", age: 19, grades: [92, 95, 89], active: true },
  { id: 3, name: "Pedro", age: 21, grades: [70, 65, 80], active: false },
  { id: 4, name: "Ana", age: 18, grades: [60, 75, 68], active: true },
  { id: 5, name: "Carlos", age: 22, grades: [90, 88, 92], active: false },
];
```

### ▶️ Exemplo de uso
```js
const olderStudents = students.filter(s => s.age >= 20);

const studentWithHighGrade = students.find(s =>
  s.grades.some(g => g > 90)
);

const highPerformingActiveStudents = students.filter(s => {
  const average = s.grades.reduce((a, g) => a + g, 0) / s.grades.length;
  return s.active && average > 80;
});
```

### 💡 Desafio:
- a. `filter` → estudantes inativos
- b. `find` → estudante com `id = 3`
- c. `filter` → estudantes com nota < 70
- d. `filter` + `map` → nomes com média > 85

---

## 📌 Exercício 4: findIndex, some e every

```js
const tasks = [
  { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
  { id: 2, title: "Ler emails", completed: true, priority: "média" },
  { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
  { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
  { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" }
];
```

### ▶️ Exemplo de uso
```js
const meetingIndex = tasks.findIndex(t => t.title === "Participar da reunião");

const hasHighPriority = tasks.some(t => t.priority === "alta");

const allCompleted = tasks.every(t => t.completed);

const incompleteHighPriority = tasks.filter(t => !t.completed && t.priority === "alta");
```

### 💡 Desafio:
- a. `findIndex` → primeira tarefa incompleta
- b. `some` → tarefa de baixa prioridade e completa
- c. `every` → todas as tarefas de alta prioridade estão incompletas?
- d. `findIndex` → id = 10 (tratar `-1`)

---

## 🛒 Exercício 5: Desafio Integrador – E-commerce

```js
const inventory = [
  { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
  { id: 2, name: "Notebook", price: 1200, stock: 5, category: "Eletrônicos", reviews: [5, 4, 5, 5, 3] },
  { id: 3, name: "Camiseta", price: 25, stock: 20, category: "Vestuário", reviews: [4, 3, 4, 5] },
  { id: 4, name: "Cafeteira", price: 100, stock: 8, category: "Cozinha", reviews: [3, 2, 5, 4, 2] },
  { id: 5, name: "Fones de Ouvido", price: 80, stock: 15, category: "Eletrônicos", reviews: [4, 4, 5, 5, 5, 4] },
  { id: 6, name: "Calça Jeans", price: 45, stock: 0, category: "Vestuário", reviews: [4, 3, 4] },
  { id: 7, name: "Liquidificador", price: 70, stock: 3, category: "Cozinha", reviews: [3, 4, 3, 5] }
];
```

### 💡 Desafios:
- a. `forEach` → listar todos os produtos formatados
- b. `filter` → produtos com `stock > 0`
- c. `filter` → "Eletrônicos" com `price < 1000`
- d. `some` → produto sem estoque
- e. `every` → todos têm pelo menos uma `review`?
- f. `findIndex` → produto "Cafeteira"
- g. `find` → primeiro da categoria "Vestuário"
- h. Função de busca por nome com `includes`
- i. Calcular média de avaliações e adicionar `averageRating`
- j. Encontrar produto com maior `averageRating`

---

🚀 **Bons estudos!** Pratique cada método e experimente combinações criativas para resolver problemas reais.
