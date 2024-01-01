const celsiusE1 = document.getElementById("celsius");
const fahrenheitE1 = document.getElementById("fahrenheit");
const KelvinE1 = document.getElementById("kelvin");


 function computeTemp(event) {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      KelvinE1.value = (currentValue + 273.32).toFixed(2);
      fahrenheitE1.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsiusE1.value = ((currentValue - 32) / 1.8).toFixed(2);
      KelvinE1.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case "kelvin":
      celsiusE1.value = (currentValue - 273.32).toFixed(2);
      fahrenheitE1.value = ((value - 273.32) * 1.8 + 32).toFixed(2);
      break;

    default:
      break;
  }
}
