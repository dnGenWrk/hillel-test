"use strict";
function createOrder(productid, products, formdata) {
  const order = new Order(productid, products, formdata);
  const formProps = {};
  const orderSaveDate = {
    date: order.date,
    productId: order.productId,
    name: order.name,
    price: order.price,
    count: order.count,
    totelPrice: order.totalPrice,
  };

  const postOrderResult = {
    title: "Order Information",
    fname: order.fname,
    lname: order.lname,
    mname: order.mname,
    fullname: order.fullname,
    city: order.city,
    adress: order.adress,
    paymentMethod: order.paymentMethod,
    count: order.count,
    comment: order.comment,
    totalPrice: order.totalPrice,
  };

  for (const [key, value] of formdata) {
    formProps[key] = value;
  }
  const strToStorage = JSON.stringify(formProps);
  const strOrderToStoradge = JSON.stringify(orderSaveDate);
  localStorage.setItem("formdata", strToStorage);
  localStorage.setItem(`${"order" + Math.floor(Math.random() * 1000)}`, strOrderToStoradge);

  showPostOrderInfo(postOrderResult);
}
