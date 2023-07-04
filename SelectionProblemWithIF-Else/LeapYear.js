const readLine = require("readline-sync");

function CheckLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is a leap year');
    }
}

const year = readLine.question('Enter a year: ');
CheckLeapYear(year);