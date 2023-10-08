"use strict";

function changeTheme(targetWrapper) {
  console.log("FIRE");
  if (targetWrapper.getAttribute("data-bs-theme") === "dark") {
    targetWrapper.setAttribute("data-bs-theme", "light");
  } else {
    targetWrapper.setAttribute("data-bs-theme", "dark");
  }
}
