"use strict";
function createOrderReport(orderId) {
  const result = {};
  result.wrapper = tag("div", "", { id: "orderreport", className: "order_report" });
  result.buttonClose = tag("button", "Close Order Info", { id: "orderreport_close", className: "orderreport_close" });
  result.buttonDelete = tag("button", "Delete Order from History", { id: "orderdelete", className: "order_delete" });
  result.buttonsWrapper = tag("div", "", { className: "orderreport_buttonswrapper" });
  result.orderDetails = tag("table", "", { className: "order_report_table" });

  const localData = JSON.parse(localStorage.getItem(orderId));
  Object.entries(localData).forEach(([key, value]) => {
    const tr = tag("tr", `<td>${key}</td><td>${value}</td>`);
    result.orderDetails.append(tr);
  });

  result.buttonsWrapper.append(result.buttonDelete);
  result.buttonsWrapper.append(result.buttonClose);
  result.wrapper.append(result.buttonsWrapper);
  result.wrapper.append(result.orderDetails);

  result.buttonClose.onclick = function (e) {
    result.wrapper.remove();
  };

  result.buttonDelete.onclick = function (e) {
    const link = document.querySelector(`[data-hashid="${orderId}"]`);
    if (link) {
      link.remove();
      result.wrapper.remove();
      localStorage.removeItem(orderId);
    }
    const checkLinks = document.querySelectorAll(".local_orders_list__link");
    if (checkLinks.length === 0) {
      document.getElementById("local_orders").remove();
      menu.list.classList.remove("hidden");
      document.getElementById("orders_ui_block").remove();
      localStorage.removeItem("formdata");
    }
  };
  return result;
}
