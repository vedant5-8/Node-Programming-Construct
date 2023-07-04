const readLine = require("readline-sync");

function IsPrime(n) {

    if (n <= 1) {
        return false;
    }

    for(let i = 2; i <= Math.sqrt(n); i++) {

        if (n % i == 0) {
            return false;
        }

    }
    return true;
}

function PrintPrimeNumbersInRange(start, end) {
    for (let i = start; i <= end; i++) {
        if (IsPrime(i)) {
            console.log(i);
        }
    }
}

let start = readLine.question('Enter a starting number: ');
start = Number(start);

let end = readLine.question('Enter a end number: ');
end = Number(end);

PrintPrimeNumbersInRange(start, end);