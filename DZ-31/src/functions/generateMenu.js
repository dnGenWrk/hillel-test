"use strict";

function generateMenu(productsList) {
  const result = {};
  const categories = new Set();
  productsList.forEach((e) => categories.add(e.category));

  const nav = tag("nav", "", {className: "appshop__menu"});
  const ul = tag("ul", "", {className: "appshop__list"});
  categories.forEach((element) => {
    const li = tag("li");
    li.append(
      tag(
        "a",
        element,
        {href: `index.html?category=${element}`, className: "appshop__menulinks", title: `Categoty: ${element}`},
        {"data-category": element}
      )
    );
    ul.append(li);
  });

  nav.append(ul);
  result.list = nav;
  result.categories = categories;
  return result;
}
