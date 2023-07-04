const readLine = require("readline-sync");

function PrimeFactors(n) {

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            console.log(i);
        }
    }
}

let num = readLine.question('Enter a number: ');
PrimeFactors(num);