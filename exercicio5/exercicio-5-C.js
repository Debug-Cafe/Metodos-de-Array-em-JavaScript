c)
const affordableElectronics = inventory.filter(product =>
  product.category === "Eletrônicos" && product.price < 1000
);
console.log(affordableElectronics);
