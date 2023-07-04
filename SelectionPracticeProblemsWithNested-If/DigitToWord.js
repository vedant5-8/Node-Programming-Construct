const readLine = require("readline-sync");

function DigitTOWord(number) {
    if (number == 1) {
        console.log("Unit");
    } 
    else if (number == 10) {
        console.log("Ten");
    }
    else if (number == 100) {
        console.log("Hundred");
    }
    else if (number == 1000) {
        console.log("Thousand");
    }
    else if (number == 10000) {
        console.log("Ten Thousand");
    }
    else if (number == 100000) {
        console.log("Lakh");
    }
    else if (number == 1000000) {
        console.log("Million");
    } 
    else {
        console.log("Enter valid number");
    }
}

const number = readLine.question('Enter a number: ');
DigitTOWord(number);