const navigationResponsive = document.querySelector("#navigation-responsive");
const inputNumber = document.querySelector("#input-form");
const buttonConvert = document.querySelector("#button-convert");
const inputResult = document.querySelector("#input-result");
const converterFormula = document.querySelector("#converter-formula");

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

    if (number != "") {
      const result = celciusToFahrenheit(number);
      inputResult.value = result;
      converterFormula.value = `(${number}°C * 9 / 5) + 32 = ${result}°F`;
    } else {
      alert("Please input the number in number section input");
      inputResult.value = "";
      converterFormula.value = "";
    }
  });
