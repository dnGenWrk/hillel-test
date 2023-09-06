"use strict";
const OrderForm = function () {
  this.form = document.getElementById("orderform");
  this.formButton = document.getElementById("order-button");
  this.setProductId = function (id) {
    this.prodid = id;
  };
  this.setProductName = function (produnctName) {
    this.productName = produnctName;
  };
};
