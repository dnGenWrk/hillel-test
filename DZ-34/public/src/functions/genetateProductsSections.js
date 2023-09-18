"use strict";
function generateProductsSections(categories, productsList) {
  const result = new Map();
  categories.forEach((element) => {
    const section = tag("section", "", { className: "productList_section" }, { "data-category": element });
    const sectionList = tag("ul", "", { className: "productList_section__list" });
    productsList.forEach((e) => {
      if (e.category === element) {
        const li = tag("li");
        const link = tag(
          "a",
          e.name,
          {
            classList: "productList_section__links",
            href: `index.html?category=${element}&productid=${e.productId}`,
            title: `${e.name} you can buy here`,
          },
          { "data-productid": e.productId }
        );

        const priceTg = tag("span", e.price, { className: "productList_section__listprice" });
        li.append(link);
        li.append(priceTg);
        sectionList.append(li);
        section.append(sectionList);
      }
    });
    result.set(element, section);
  });

  return result;
}
