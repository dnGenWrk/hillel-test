"use strict";
class AppCalculator {
  constructor(currDateWrapper) {
    this.currentDateHtmlEl = currDateWrapper;
    this.currentDate = {
      date: "fff",
      time: "111",
    };
    this.currency = {};
  }
  getDateTime() {
    fetch("http://worldtimeapi.org/api/timezone/Europe/Kyiv")
      .then((response) => {
        if (!response.ok) {
          console.log("Error");
        }
        return response.json();
      })
      .then((json) => {
        const dateTime = json.datetime;
        this.renderDateTime(dateTime);
      })
      .catch(function (err) {
        console.log("Fetch error: " + err);
      });
  }

  getCurrentCurrency = async function () {
    let response = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");

    let currency = await response.json();
    const result = currency.filter((el) => {
      if (el.r030 === 840 || el.r030 === 978) {
        return el;
      }
    });

    //this.renderCurrency(this.currency.usa, this.currency.euro);
    this.currency.usa = result[0].rate;
    this.currency.euro = result[1].rate;
  };
  renderDateTime(dateTime) {
    const date = dateTime.split("T");
    const time = date[1].toString().split(".");
    const monthNum = date[0].split("-");
    const month = checkMonth(monthNum[1]);
    this.currentDateHtmlEl.textContent = `Current date: ${monthNum[0]}-${month}-${monthNum[2]},  Current Time is: ${time[0]}`;
  }

  renderCurrency(usa, euro) {
    if (usa) {
      document.getElementById("currencyUSD").textContent = `Amount of $= ${usa}`;
    }
    if (euro) {
      document.getElementById("currencyEURO").textContent = `Amount of EURO= ${euro}`;
    }
  }
}
