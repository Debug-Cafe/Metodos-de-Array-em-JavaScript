//g. Encontrar o primeiro produto da categoria "Vestuário"

const firstClothing = inventory.find(product => product.category === "Vestuário");
console.log(firstClothing);