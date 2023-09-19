"use strict";
class AppLayout {
  constructor(mainContaier) {
    this.appMain = mainContaier;
    this.generalSection = tag("section", "", { id: "appGenetalSection", className: "appshop__generalsection" });
    this.additionSection = tag("section", "", { id: "additionSection", className: "appshop__additionsectioon" });
  }

  render() {
    const appWrapper = tag("div", "", { className: "appshop__wrapper" });
    const sideSection = tag("section", "", { id: "appSideSection", className: "appshop__sidesection" });
    const postOrderPage = tag("section", "", { id: "postorderSection", className: "appshop__postorderpage hidden" });
    const ordersUiBlock = tag("div", "", { id: "orders_ui_block", className: "ordersui_block" });

    sideSection.prepend(this.ordersUiBlock);
    appWrapper.append(this.sideSection, this.generalSection, this.additionSection);

    this.appMain.append(appWrapper);
    this.appMain.append(postOrderPage);
    return this;
  }
  updateProductsListSection(category, productList) {
    const currentSection = document.querySelector(".productList_section");
    if (currentSection) {
      currentSection.remove();
    }
    this.generalSection.append(productList.get(category));
  }

  updateProductInfoSection(productCard) {
    const currentCard = document.querySelector(".product_card");
    const form = document.getElementById("order-form");
    if (currentCard) {
      currentCard.remove();
    }
    if (form) {
      form.remove();
    }
    this.additionSection.append(productCard);
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
