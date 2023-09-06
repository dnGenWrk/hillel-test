"use strict";
const createProductCards = function (category) {
  const products = getProducts(category, allProducts);
  const productWrapper = tag("ul");
  products.forEach((element) => {
    const tagLi = tag("li");
    const tagA = tag("a", element.name, {}, { href: `?category=${category}&productid=${element.productId}`, "data-productid": `${element.productId}` });
    tagLi.append(tagA);
    productWrapper.append(tagLi);
  });
  return productWrapper;
};
