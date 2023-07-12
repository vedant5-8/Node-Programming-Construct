const readLine = require("readline-sync");

function PrimeFactors(n) {

    let factors = [];

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            factors.push(i);
        }
    }
    return factors;
}

let num = readLine.question('Enter a number: ');
console.log('The factors of ' + num + ' are: ' + PrimeFactors(num));