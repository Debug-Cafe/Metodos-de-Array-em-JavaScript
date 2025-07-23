/*
Exercício 5: Desafio Integrador - E-commerce

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
*/

const inventory = [
    { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
    { id: 2, name: "Notebook", price: 1200, stock: 5, category: "Eletrônicos", reviews: [5, 4, 5, 5, 3] },
    { id: 3, name: "Camiseta", price: 25, stock: 20, category: "Vestuário", reviews: [4, 3, 4, 5] },
    { id: 4, name: "Cafeteira", price: 100, stock: 8, category: "Cozinha", reviews: [3, 2, 5, 4, 2] },
    { id: 5, name: "Fones de Ouvido", price: 80, stock: 15, category: "Eletrônicos", reviews: [4, 4, 5, 5, 5, 4] },
    { id: 6, name: "Calça Jeans", price: 45, stock: 0, category: "Vestuário", reviews: [4, 3, 4] },
    { id: 7, name: "Liquidificador", price: 70, stock: 3, category: "Cozinha", reviews: [3, 4, 3, 5] }
];

// a. Mostrar uma lista formatada de todos os produtos usando forEach
inventory.forEach(p => console.log(`${p.name} - R$${p.price} (${p.stock} em estoque)`));

// b. Filtrar produtos que estão em estoque (stock > 0)
const inStock = inventory.filter(p => p.stock > 0);

// c. Filtrar produtos da categoria "Eletrônicos" com preço < 1000
const cheapElectronics = inventory.filter(p => p.category === "Eletrônicos" && p.price < 1000);

// d. Verificar se há algum produto sem estoque
const hasNoStock = inventory.some(p => p.stock === 0);

// e. Verificar se todos os produtos têm pelo menos uma avaliação (review)
const allHaveReviews = inventory.every(p => p.reviews.length > 0);

// f. Encontrar o índice do produto "Cafeteira"
const cafeteiraIndex = inventory.findIndex(p => p.name === "Cafeteira");

// g. Encontrar o primeiro produto da categoria "Vestuário"
const firstClothing = inventory.find(p => p.category === "Vestuário");

// h. Criar uma função de busca que retorna produtos cujo nome contenha um termo específico
function searchProducts(term) {
  return inventory.filter(p => p.name.toLowerCase().includes(term.toLowerCase()));
}

// i. Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"
const inventoryWithAverage = inventory.map(p => ({
  ...p,
  averageRating: p.reviews.reduce((a, b) => a + b, 0) / p.reviews.length
}));

// j. Encontrar o produto com a maior média de avaliações
const bestProduct = inventoryWithAverage.reduce((best, p) =>
  p.averageRating > best.averageRating ? p : best, inventoryWithAverage[0]);
console.log(`Produto com melhor avaliação: ${bestProduct.name} (${bestProduct.averageRating.toFixed(2)})`);
