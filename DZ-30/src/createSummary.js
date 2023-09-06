"use strict";
const createSummary = function (formData, appWrapper) {
  const summaryWrapper = document.getElementById("order-page");
  const results = [];

  const tagTitle = tag("h2", "Order", { className: "result_header" });
  const tagWrapper = tag("div", "", { className: "result__wrapper" });
  tagWrapper.append(tagTitle);
  for (const [key, value] of formData) {
    const divRow = tag("div", `<div class="result__col1"><span>${key}</span></div><div class="result__col2"><span>${value}</span></div>`, {
      className: "result__row",
    });
    tagWrapper.append(divRow);
  }
  summaryWrapper.append(tagWrapper);
  appWrapper.classList.add("hidden");
  summaryWrapper.classList.remove("hidden");
};
