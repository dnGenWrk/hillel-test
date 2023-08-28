"use strict";
const getAppProductId = function () {
  const productId = new URLSearchParams(document.location.search).get("productid");
  return productId;
};
