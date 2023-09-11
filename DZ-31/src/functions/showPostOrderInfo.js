"use strict";
function showPostOrderInfo(order) {
  appLayout.appWrapper.classList.add("hidden");
  appLayout.postOrderPage.classList.remove("hidden");
  const wrapper = tag("div", "", { className: "postorder__wrapper" });
  const title = tag("h2", order.title, { className: "postorder__title" });
  const tagContent = tag("div");
  const button = tag("button", "Close", { className: "postorder_closecta" });

  const resultTable = `<table class="postorder_result">
  <caption>
    Product: ${order.title}
  </caption>
  <tbody>
    <tr>
      <td>First Name:</td>
      <td>${order.fname}</td>
    </tr>
    <tr>
      <td>Last Name:</td>
      <td>${order.lname}</td>
    </tr>
    <tr>
      <td>Middle Name:</td>
      <td>${order.mname}</td>
    </tr>
    <tr>
      <td>City:</td>
      <td>${order.city}</td>
    </tr>

    <tr>
      <td>Nova Poshta warehouse for delivery:</td>
      <td>${order.adress}</td>
    </tr>
    <tr>
      <td>Method of payment:</td>
      <td>${order.paymentMethod}</td>
    </tr>
    <tr>
      <td>Total Price:</td>
      <td>${order.totalPrice}</td>
    </tr>
    <tr>
      <td>Comment to the order:</td>
      <td>${order.comment}</td>
    </tr>
  </tbody>
</table>`;
  tagContent.innerHTML = resultTable;
  wrapper.append(title);
  wrapper.append(tagContent);
  wrapper.append(button);

  const resultElem = appLayout.postOrderPage.children;
  if (resultElem.length > 0) {
    appLayout.postOrderPage.removeChild(resultElem[0]);
  }

  appLayout.postOrderPage.append(wrapper);
  button.addEventListener("click", function (e) {
    appLayout.postOrderPage.classList.add("hidden");
    appLayout.appWrapper.classList.remove("hidden");
    showOrdersUI();
  });
}
