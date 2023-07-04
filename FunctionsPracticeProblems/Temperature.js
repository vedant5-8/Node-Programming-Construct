const readLine = require("readline-sync");

function TemperatureConversion(temperature, unit) {
    let result;
    switch (unit) {
        case "C":
            if (temperature > 0 && temperature < 100) {
                result = "The temperature within the freezing and boiling point of the water."
            } else {
                let fahrenheit = (temperature * 9/5) + 32;
                result = temperature + "°C is " + fahrenheit + " °F.";
            }
            break;
        case "F":
            if (temperature > 32 && temperature < 212) {
                result = "The temperature within the freezing and boiling point of the water."
            } else {
                let celcius = (temperature - 32) * 5/9;
                result = temperature + "°F is " + celcius + " °C.";
            }
            break;
        default:
            result = "Invalid Input";
    }
    return result;
}

let Temperature = readLine.question('Enter a Temperature: ');
Temperature = Number(Temperature);

let Unit = readLine.question("Enter the unit (C or F): ");

console.log(TemperatureConversion(Temperature, Unit));