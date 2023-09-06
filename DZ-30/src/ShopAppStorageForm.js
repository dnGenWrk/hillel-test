"use strict";
const ShopAppStorageForm = function (orderForm) {
  this.formProps = {};
  for (const [key, value] of orderForm) {
    this.formProps[key] = value;
  }

  const strToStorage = JSON.stringify(this.formProps);
  localStorage.formData = strToStorage;
};
