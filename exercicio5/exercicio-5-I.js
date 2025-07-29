// i. Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"
const inventoryWithAvg = inventory.map(product => {
  const total = product.reviews.reduce((sum, rating) => sum + rating, 0);
  const avg = total / product.reviews.length;

  return {
    ...product,
    averageRating: parseFloat(avg.toFixed(2))
  };
});
console.log(inventoryWithAvg);

