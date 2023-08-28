"use strict";
const Menu = function (id) {
  this.menu = document.getElementById(id);
  this.links = document.querySelectorAll(`#${id} a`);

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
