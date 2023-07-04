const readLine = require("readline-sync");

function FeetToInch(Feet) {
    Inch = Feet * 12;
    console.log(Inch);
}

function InchToFeet(Inch) {
    Feet = Inch / 12;
    console.log(Feet);
}

function FeetToMeter(Feet) {
    Meter = Feet * 0.3048;
    console.log(Meter);
}

function MeterToFeet(Feet) {
    Feet = Meter * 3.280839895;
    console.log(Meter);
}

console.log("Choose an option: ");
console.log("1. Feet to Inch");
console.log("2. Inch to Feet");
console.log("3. Feet to Meter");
console.log("4. Meter to Feet");
let option = readLine.question('=> ');

switch (Number(option)) {
    case 1:
        let Feet1 = readLine.question('Enter Feets: ');
        FeetToInch(Feet1);
        break;
    case 2:
        let Inch = readLine.question('Enter Inches: ');
        InchToFeet(Inch);
        break;
    case 3:
        let Feet2 = readLine.question('Enter Feets: ');
        FeetToMeter(Feet2);
        break;
    case 4:
        let Meter = readLine.question('Enter Meters: ');
        FeetToMeter(Meter);
        break;
    default:
        console.log('Enter valid option');
        break;
}