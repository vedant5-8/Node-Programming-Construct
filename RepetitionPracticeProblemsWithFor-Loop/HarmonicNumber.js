const readLine = require("readline-sync");

function HarmonicSum(n) {

    let sum = 0;

    for(let i = 1; i <= n; i++) {

        sum += 1/i;

    }
    console.log(sum);

}

let num = readLine.question('Enter a number: ');
HarmonicSum(num);