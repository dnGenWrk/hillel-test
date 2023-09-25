"use strict";
class AppLayout {
  constructor(mainContaier) {
    this.appMain = mainContaier;
    this.sideSection = tag("section", "", { id: "appSideSection", className: "appshop__sidesection" });
    this.generalSection = tag("section", "", { id: "appGenetalSection", className: "appshop__generalsection" });
    this.additionSection = tag("section", "", { id: "additionSection", className: "appshop__additionsectioon" });
  }

  render() {
    const appWrapper = tag("div", "", { className: "appshop__wrapper" });
    const postOrderPage = tag("section", "", { id: "postorderSection", className: "appshop__postorderpage hidden" });
    const ordersUiBlock = tag("div", "", { id: "orders_ui_block", className: "ordersui_block" });

    this.sideSection.append(ordersUiBlock);
    appWrapper.append(this.sideSection, this.generalSection, this.additionSection);

    this.appMain.append(appWrapper);
    this.appMain.append(postOrderPage);
    return this;
  }

  updateProductsListSection(category, productList) {
    this.sideSection.querySelector(".appshop__menulinks.active")?.classList.remove("active");

    if (this.generalSection.hasChildNodes()) {
      this.generalSection.removeChild(this.generalSection.firstChild);
    }
    if (category) {
      this.sideSection.querySelector(`.appshop__menulinks[data-category='${category}']`).classList.add("active");
      this.generalSection.append(productList.get(category));
    }
  }

  updateProductInfoSection(productId) {
    this.generalSection.querySelector(".productList_section__links.active")?.classList.remove("active");

    const currentCard = document.querySelector(".product_card");
    if (currentCard) {
      currentCard.remove();
    }

    if (!productId) {
      return;
    }
    this.generalSection.querySelector(`.productList_section__links[data-productid='${productId}']`).classList.add("active");

    const productCard = generateProductCard(productId, products);
    this.additionSection.append(productCard);

    /*const form = document.getElementById("order-form");

    if (form) {
      form.remove();
    }*/
  }

  clearProductInfoSection() {
    this.additionSection.innerHTML = "";
  }

  clearProductsActiveLinks() {
    const productsSectionLinks = document.querySelectorAll(".productList_section__links");
    if (productsSectionLinks) {
      productsSectionLinks.forEach((link) => {
        link.classList.remove("active");
      });
    }
  }
}
