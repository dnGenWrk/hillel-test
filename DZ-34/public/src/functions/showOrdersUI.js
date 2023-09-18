"use strict";
function showOrdersUI() {
  const button = tag("button", "My orders", { id: "myorders", className: "myorders__button" });
  const resultElem = appLayout.ordersUiBlock.children;
  if (resultElem.length > 0) {
    appLayout.ordersUiBlock.removeChild(resultElem[0]);
  }
  appLayout.ordersUiBlock.append(button);
}
