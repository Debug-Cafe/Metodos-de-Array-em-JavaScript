const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
];

const productsWithTax = products.map(product => ({
  name: product.name,
  priceWithTax: (product.price * 1.15).toFixed(2)
}));

console.log("Produtos com imposto aplicado:");
productsWithTax.forEach(p =>
  console.log(`${p.name}: R$ ${p.priceWithTax}`)
);
