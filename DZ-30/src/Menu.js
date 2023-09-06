"use strict";
const Menu = function (id, products) {
  this.categories = [];
  for (const [key, value] of products) {
    this.categories.push(key);
  }

  this.menu = document.getElementById(id);
  this.UL = tag("ul");
  this.categories.forEach((e) => {
    const li = tag("li");
    const link = tag("a", e, { href: "#" }, { "data-category": e });
    li.append(link);
    this.UL.append(li);
  });
  this.menu.append(this.UL);

  this.menu.addEventListener("click", function (e) {
    e.preventDefault();
    const navLinkCategory = e.target.dataset.category;
    if (navLinkCategory && navLinkCategory !== getAppCategory()) {
      document.location.href = `./index.html?category=${navLinkCategory}`;
    }
  });

  this.setActiveItem = function () {
    const category = getAppCategory();
    if (category) {
      const activeElement = document.querySelector(`[data-category="${category}"]`);
      if (activeElement) {
        activeElement.focus();
        activeElement.classList.add("active");
      }
    }
  };

  this.setActiveItem();
};
