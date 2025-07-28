const allHaveReviews = inventory.every(product => product.reviews.length > 0);
console.log(allHaveReviews);