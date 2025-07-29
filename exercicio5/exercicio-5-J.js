// j. Encontrar o produto com a maior média de avaliações

const inventoryWithAvg = inventory.map(product => {
  const total = product.reviews.reduce((sum, rating) => sum + rating, 0);
  const avg = total / product.reviews.length;

  return {
    ...product,
    averageRating: parseFloat(avg.toFixed(2))
  };
});
console.log(inventoryWithAvg);

