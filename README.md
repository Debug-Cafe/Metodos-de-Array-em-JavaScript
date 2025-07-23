# Aula Prática: Métodos de Array em JavaScript
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

**Enunciado:**

1. Função tradicional
2. Arrow function
3. Função com rest parameters
4. Usando spread operator com arrays
5. Usando spread com objetos

**Desafio para os alunos:**

a. Crie uma função que recebe um objeto person e retorna um novo objeto com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)
b. Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array combinado com todos os elementos (use rest e spread)
products.forEach((product, i) => {
  console.log(`${i + 1}. ${product.name} - R$${product.price}`);
});

// b. Array de strings "Nome - Categoria"
const formattedNames = products.map(p => `${p.name} - ${p.category}`);

// c. Preços com impostos (15% a mais)
const pricesWithTax = products.map(p => p.price * 1.15);

// d. Valor total dos produtos
**Enunciado:**

1. Usando forEach para imprimir todos os produtos
2. Usando map para criar um novo array apenas com nomes dos produtos
3. Usando map para criar um array de produtos com desconto de 10%

**Desafio para os alunos:**

a. Use map para criar um array de strings formatadas como "Nome do produto - Categoria" para cada produto
b. Use map para criar um array com os preços de todos os produtos com impostos (15% a mais)
c. Combine forEach com um acumulador externo para calcular o valor total de todos os produtos
// a. Estudantes inativos
const inactiveStudents = students.filter(s => !s.active);

// b. Estudante com id = 3
const studentId3 = students.find(s => s.id === 3);

// c. Estudantes com nota abaixo de 70
const studentsWithLowGrade = students.filter(s => s.grades.some(g => g < 70));

// d. Nomes dos estudantes com média > 85
**Enunciado:**

1. Usando filter para encontrar estudantes com idade >= 20
2. Usando find para encontrar o primeiro estudante com nota > 90
3. Usando filter para encontrar estudantes ativos com média acima de 80

**Desafio para os alunos:**

a. Use filter para encontrar estudantes inativos
b. Use find para encontrar o estudante com id = 3
c. Use filter para encontrar estudantes que tiraram pelo menos uma nota abaixo de 70
d. Combine filter e map para obter apenas os nomes dos estudantes com média > 85
];

// a. Índice da primeira tarefa incompleta
const firstIncompleteIndex = tasks.findIndex(t => !t.completed);

// b. Alguma tarefa de baixa prioridade completa?
const hasCompletedLowPriority = tasks.some(t => t.priority === "baixa" && t.completed);

// c. Todas as tarefas de alta prioridade estão incompletas?
const allHighPriorityIncomplete = tasks
**Enunciado:**

1. Usando findIndex para encontrar a posição da tarefa "Participar da reunião"
2. Usando some para verificar se há pelo menos uma tarefa de alta prioridade
3. Usando every para verificar se todas as tarefas estão completas
4. Combinando some e filter para encontrar tarefas incompletas de alta prioridade

**Desafio para os alunos:**

a. Use findIndex para encontrar a posição da primeira tarefa incompleta
b. Use some para verificar se existe alguma tarefa de baixa prioridade completa
c. Use every para verificar se todas as tarefas de alta prioridade estão incompletas
d. Use findIndex para encontrar a posição de uma tarefa com id = 10. Lide com o caso em que a tarefa não existe (dica: findIndex retorna -1 quando não encontra)
  { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
  // ...
];

// a. Lista formatada de produtos
inventory.forEach(p => console.log(`${p.name} - R$${p.price} (${p.stock} em estoque)`));

// b. Produtos em estoque
const inStock = inventory.filter(p => p.stock > 0);

**Enunciado:**

Imagine que você está criando um sistema para uma loja online.
Use os métodos de array para implementar as seguintes funcionalidades:

a. Mostrar uma lista formatada de todos os produtos usando forEach
b. Filtrar produtos que estão em estoque (stock > 0)
c. Filtrar produtos da categoria "Eletrônicos" com preço < 1000
d. Verificar se há algum produto sem estoque
e. Verificar se todos os produtos têm pelo menos uma avaliação (review)
f. Encontrar o índice do produto "Cafeteira"
g. Encontrar o primeiro produto da categoria "Vestuário"
h. Criar uma função de busca que retorna produtos cujo nome contenha um termo específico
i. Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"
j. Encontrar o produto com a maior média de avaliações
  { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },

  // ...
