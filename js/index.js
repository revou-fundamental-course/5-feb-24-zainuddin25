const navigationResponsive = document.querySelector("#navigation-responsive");

document
  .querySelector("#hamburger-menu")
  .addEventListener("click", function () {
    navigationResponsive.classList.toggle("active-menu");
  });

const celciusToFahrenheit = (celcius) => {
  return (celcius * 9) / 5 + 32;
};

const fahrenheitToCelcius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
