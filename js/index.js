const navigationResponsive = document.querySelector("#navigation-responsive");
const inputNumber = document.querySelector("#input-form");

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

    alert(number);
  });

const celciusToFahrenheit = (celcius) => {
  return (celcius * 9) / 5 + 32;
};

const fahrenheitToCelcius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
