const navigationResponsive = document.querySelector("#navigation-responsive");
const inputNumber = document.querySelector("#input-form");
const buttonConvert = document.querySelector("#button-convert");
const inputResult = document.querySelector("#input-result");
const converterFormula = document.querySelector("#converter-formula");
const history = localStorage.getItem("history");

const celciusToFahrenheit = (celcius) => {
  return (celcius * 9) / 5 + 32;
};

const fahrenheitToCelcius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

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
    const result = celciusToFahrenheit(number);

    const existingData = JSON.parse(localStorage.getItem("history")) || [];

    const newHistory = {
      from: "celcius",
      to: "fahrenheit",
      number: number,
      result: result,
    };

    if (number != "") {
      inputResult.value = result;
      converterFormula.value = `(${number}°C * 9 / 5) + 32 = ${result}°F`;
      existingData.push(newHistory);
      localStorage.setItem("history", JSON.stringify(existingData));
    } else {
      alert("Please input the number in number section input");
      inputResult.value = "";
      converterFormula.value = "";
    }
  });
