const readLine = require("readline-sync");

function WeekDays(number) {

    switch (Number(number)) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Enter number between 1 to 7.");
            break;
    }
}

const number = readLine.question('Enter a number: ');
WeekDays(number);