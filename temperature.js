// TEMPERATURE CONVERSION

// Get metric to convert from
let tempMetricFrom = prompt(
  "In which metric is the temperature you are converting?\nC - Celsius\nF - Fahrenheit\nK - Kelvin"
);
tempMetricFrom = tempMetricFrom.toUpperCase(); // in case user enters lower case

// Get number to convert
let numToConvert = prompt("Enter the number you wish to convert: ");
numToConvert = Number(numToConvert); // make sure number entered is treated as a number, not a string

// Get metric to convert to
let tempMetricTo = prompt(
  "To which metric would you like to convert the temperature to?\nC - Celsius\nF - Fahrenheit\nK - Kelvin"
);
tempMetricTo = tempMetricTo.toUpperCase(); // in case user enters lower case

let tempResult;

switch (tempMetricFrom) {
  case "C":
    switch (tempMetricTo) {
      case "F":
        tempResult = (numToConvert * 9) / 5 + 32;
        break;
      case "K":
        tempResult = numToConvert + 273.15;
        break;
      case "C":
        tempResult = numToConvert;
        break;
      default:
        console.log("Output temperature unit not recognised!");
        break;
    }
    // Output
    console.log(
      `${numToConvert}${tempMetricFrom} is ${Math.round(
        tempResult
      )}${tempMetricTo}`
    );
    break;

  case "F":
    switch (tempMetricTo) {
      case "F":
        tempResult = numToConvert;
        break;
      case "K":
        tempResult = ((numToConvert + 459.67) * 5) / 9;
        break;
      case "C":
        tempResult = ((numToConvert - 32) * 5) / 9;
        break;
      default:
        console.log("Output temperature unit not recognised!");
        break;
    }
    // Output
    console.log(
      `${numToConvert}${tempMetricFrom} is ${Math.round(
        tempResult
      )}${tempMetricTo}`
    );
    break;

  case "K":
    switch (tempMetricTo) {
      case "F":
        tempResult = (numToConvert * 9) / 5 - 459.67;
        break;
      case "K":
        tempResult = numToConvert;
        break;
      case "C":
        tempResult = numToConvert - 273.15;
        break;
      default:
        console.log("Output temperature unit not recognised!");
        break;
    }
    // Output
    console.log(
      `${numToConvert}${tempMetricFrom} is ${Math.round(
        tempResult
      )}${tempMetricTo}`
    );
    break;

  default:
    console.log("Input temperature unit not recognised!");
    break;
}
