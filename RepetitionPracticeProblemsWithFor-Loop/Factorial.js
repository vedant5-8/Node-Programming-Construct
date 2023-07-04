const readLine = require("readline-sync");

function Factorial(n) {

    let factor = 1;

    for(let i = 1; i <= n; i++) {

        factor = factor * i;

    }
    console.log(factor);

}

let num = readLine.question('Enter a number: ');
Factorial(num);