const navigationResponsive = document.querySelector("#navigation-responsive");
const inputNumber = document.querySelector("#input-from");
const inputResult = document.querySelector("#input-result");
const buttonConvert = document.querySelector("#button-convert");
const converterFormula = document.querySelector("#converter-formula");
const titleFrom = document.querySelector("#title-from");
const titleResult = document.querySelector("#title-result");

const history = localStorage.getItem("history");
let typeConvert = "ctf";

const celciusToFahrenheit = (celcius) => {
  return (celcius * 9) / 5 + 32;
};

const fahrenheitToCelcius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

document
  .querySelector("#select-type-convert")
  .addEventListener("change", function (event) {
    typeConvert = event.target.value;

    inputNumber.value = "";
    inputResult.value = "";
    converterFormula.value = "";

    if (typeConvert == "ctf") {
      titleFrom.textContent = "Celcius (°C)";
      titleResult.textContent = "Fahrenheit (°F)";
    } else {
      titleFrom.textContent = "Fahrenheit (°F)";
      titleResult.textContent = "Celcius (°C)";
    }
  });

document
  .querySelector("#hamburger-menu")
  .addEventListener("click", function () {
    navigationResponsive.classList.toggle("active-menu");
  });

document
  .querySelector("#form-converter")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const number = formData.get("number");
    let result = 0;

    if (typeConvert == "ctf") {
      result = celciusToFahrenheit(number);
    } else {
      result = fahrenheitToCelcius(number);
    }

    const existingData = JSON.parse(localStorage.getItem("history")) || [];

    const newHistory = {
      from: typeConvert == "ctf" ? "Celcius" : "Fahrenheit",
      to: typeConvert == "ctf" ? "Fahrenheit" : "Celcius",
      number: number,
      result: result,
    };

    if (number != "") {
      inputResult.value = result;
      existingData.push(newHistory);
      localStorage.setItem("history", JSON.stringify(existingData));
      if (typeConvert == "ctf") {
        converterFormula.value = `(${number}°C * 9 / 5) + 32 = ${result}°F`;
      } else {
        converterFormula.value = `(${number}°F - 32) * 5 / 9 = ${result}°C`;
      }
    } else {
      alert("Please input the number in number section input");
      inputResult.value = "";
      converterFormula.value = "";
    }
  });
