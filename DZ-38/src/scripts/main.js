"use strict";
const weatherForm = document.getElementById("wform");
const formButton = document.getElementById("ctaButton");
const select = document.getElementById("city");
const apiURL = "https://api.openweathermap.org/data/2.5/weather";
const APPID = "248002fd44fa2c780a2aeced47e912bc";

weatherForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (weatherForm.checkValidity()) {
    formButton.disabled = true;
    const fData = new FormData(weatherForm);
    const city = fData.get("city");
    const reqURL = `${apiURL}?q=${city}&units=metric&APPID=${APPID}`;
    fetch(reqURL)
      .then((response) => {
        if (!response.ok) {
          console.log("Response status err");
          return;
        }
        return response.json();
      })
      .then((json) => {
        renderResult(json);
      })
      .catch(function (err) {
        console.log("Fetch Error : ", err);
      });
  }
});

select.onchange = function () {
  formButton.disabled = false;
};

function renderResult(res) {
  const target = document.getElementById("wres");
  const wrapper = tag("div", "", { className: "weather-result__card" });
  const title = tag("h2", `Weather in ${res.name}`, { className: "weather-result__title" });
  const img = tag("img", "", { src: `./assets/svg/${res.weather[0].icon}.svg`, className: "weather-result__img" });
  const subtitle = tag("h3", `${Math.floor(res.main.temp)} С&deg;`, { className: "weather-result__subtitle" });
  const description = tag("p", res.weather[0].description, { className: "weather-result__description" });
  const list = tag(
    "ul",
    `<li>Pressure: ${res.main.pressure}</li><li>Humidity: ${res.main.humidity}</li><li>Wind Speed: ${res.wind.speed}</li><li>Wind Degree: ${res.wind.deg}</li>`,
    {
      className: "weather-result__list",
    }
  );
  wrapper.append(title, img, description, subtitle, list);
  if (target.hasChildNodes()) {
    target.removeChild(target.children[0]);
  }
  target.append(wrapper);
}
