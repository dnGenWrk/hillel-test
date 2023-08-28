"use strict";
const getAppCategory = function () {
  const category = new URLSearchParams(document.location.search).get("category");
  return category;
};
