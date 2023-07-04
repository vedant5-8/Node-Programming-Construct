const readLine = require('readline-sync');

function MonthAndDate(date, month) {

    if (month.toLowerCase() === 'april' || month.toLowerCase() === 'may') {
        console.log(true);
    } 
    else if (month.toLowerCase() === 'march' && date >= 20) {
        console.log(true);
    }
    else if (month.toLowerCase() === 'june' && date <= 20) {
        console.log(true);
    }
    else {
        console.log(false);
    }

}

const Date = readLine.question('Enter a date: ');
const Month = readLine.question('Enter a month: ');

MonthAndDate(Date, Month);