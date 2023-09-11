"use strict";
class LocalOrders {
  constructor() {
    this.list = {};
    let keys = Object.keys(localStorage);
    for (let key of keys) {
      if (key !== "formdata") {
        this.list[key] = localStorage.getItem(key);
      }
    }

    this.wrapper = tag("div", "", { id: "local_orders", className: "localorders" });
    this.closeButton = tag("button", "X", { id: "local_orders_close", className: "local_orders_close" });
    const tagUl = tag("ul", "", { id: "local_orders_list", className: "localorders_list" });

    Object.entries(this.list).forEach(([key, value]) => {
      const objFromStr = JSON.parse(value);
      const tagLi = tag("li");
      const tagLink = tag(
        "a",
        `${objFromStr.date} <span>${objFromStr.price}</span>`,
        { href: `#${key}`, className: "local_orders_list__link" },
        { "data-orderproduct": objFromStr.productId, "data-hashid": `${key}` }
      );
      tagLi.append(tagLink);
      tagUl.append(tagLi);
    });
    this.wrapper.append(this.closeButton);
    this.wrapper.append(tagUl);
    this.closeButton.onclick = function () {
      document.getElementById("local_orders").remove();
      menu.list.classList.remove("hidden");
    };
  }
}
