"use strict";
// Since we have nowhere to get the goods, we simulate getting them with function getProducts.
function getProducts(category, products) {
  const result = products;
  if (!category) {
    return null;
  }

  return result.get(category);
}
