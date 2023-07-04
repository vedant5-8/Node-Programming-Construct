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

let num = readLine.question('Enter a number: ');
if (IsPrime(num)) {
    console.log(num + ' is prime number')
}
else {
    console.log(num + ' is not prime number');
}