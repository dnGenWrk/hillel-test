"use strict";
function generateProductCard(productid, products) {
  const product = products.find((e) => {
    return +e.productId === +productid;
  });

  const wrapper = tag("div", "", { className: "product_card" });
  const title = tag("h2", product.name, { className: "product_card__title" });
  const description = tag("p", product.description, { className: "product_card__description" });
  const price = tag("p", `Price: ${product.price}`, { className: "product_card__price" });
  const button = tag("button", "Buy now", { id: "cardbutton", className: "product_card__button" }, { "data-productid": product.productId });
  wrapper.append(title, description, price, button);

  return wrapper;
}
